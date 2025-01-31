package server

import (
	"context"

	"github.com/palantir/stacktrace"
	"github.com/tnyim/jungletv/proto"
	"github.com/tnyim/jungletv/server/auth"
	"github.com/tnyim/jungletv/types"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (s *grpcServer) WithdrawalHistory(ctxCtx context.Context, r *proto.WithdrawalHistoryRequest) (*proto.WithdrawalHistoryResponse, error) {
	ctx, err := BeginTransaction(ctxCtx)
	if err != nil {
		return nil, stacktrace.Propagate(err, "")
	}
	defer ctx.Commit() // read-only tx

	userClaims := auth.UserClaimsFromContext(ctx)
	if userClaims == nil {
		return nil, stacktrace.NewError("user claims unexpectedly missing")
	}

	var withdrawals []*types.Withdrawal
	var total uint64

	withdrawals, total, err = types.GetWithdrawalsForAddress(ctx, userClaims.RewardAddress, readPaginationParameters(r))
	if err != nil {
		return nil, stacktrace.Propagate(err, "")
	}

	return &proto.WithdrawalHistoryResponse{
		Withdrawals: convertWithdrawals(withdrawals),
		Offset:      readOffset(r),
		Total:       total,
	}, nil
}

func convertWithdrawals(orig []*types.Withdrawal) []*proto.Withdrawal {
	protoEntries := make([]*proto.Withdrawal, len(orig))
	for i, entry := range orig {
		protoEntries[i] = convertWithdrawal(entry)
	}
	return protoEntries
}

func convertWithdrawal(orig *types.Withdrawal) *proto.Withdrawal {
	return &proto.Withdrawal{
		TxHash:         orig.TxHash,
		RewardsAddress: orig.RewardsAddress,
		Amount:         NewAmountFromDecimal(orig.Amount).SerializeForAPI(),
		StartedAt:      timestamppb.New(orig.StartedAt),
		CompletedAt:    timestamppb.New(orig.CompletedAt),
	}
}
