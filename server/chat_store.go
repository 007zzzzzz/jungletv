package server

import (
	"context"
	"sync"
	"time"

	"github.com/bwmarrin/snowflake"
	"github.com/emirpasic/gods/maps/treemap"
	"github.com/emirpasic/gods/utils"
)

// ChatStore can save and load chat messages
type ChatStore interface {
	StoreMessage(context.Context, *ChatMessage) error
	DeleteMessage(context.Context, snowflake.ID) error
	LoadMessagesSince(context.Context, time.Time) ([]*ChatMessage, error)
	LoadNumLatestMessages(context.Context, int) ([]*ChatMessage, error)
}

// ChatStoreNoOp does not actually store any messages
type ChatStoreNoOp struct{}

func (*ChatStoreNoOp) StoreMessage(context.Context, *ChatMessage) error {
	return nil
}

func (*ChatStoreNoOp) DeleteMessage(context.Context, snowflake.ID) error {
	return nil
}

func (*ChatStoreNoOp) LoadMessagesSince(context.Context, time.Time) ([]*ChatMessage, error) {
	return []*ChatMessage{}, nil
}

func (*ChatStoreNoOp) LoadNumLatestMessages(context.Context, int) ([]*ChatMessage, error) {
	return []*ChatMessage{}, nil
}

// ChatStoreMemory stores messages in memory
type ChatStoreMemory struct {
	l           sync.RWMutex
	msgMap      *treemap.Map
	maxMessages int
}

// NewChatStoreMemory initializes and returns a new ChatStoreMemory
func NewChatStoreMemory(maxMessages int) *ChatStoreMemory {
	return &ChatStoreMemory{
		msgMap:      treemap.NewWith(utils.Int64Comparator),
		maxMessages: maxMessages,
	}
}

func (s *ChatStoreMemory) StoreMessage(_ context.Context, m *ChatMessage) error {
	s.l.Lock()
	defer s.l.Unlock()
	s.msgMap.Put(m.ID.Int64(), m)
	for s.msgMap.Size() > s.maxMessages {
		k, _ := s.msgMap.Min()
		if k == nil {
			break
		}
		s.msgMap.Remove(k)
	}
	return nil
}

func (s *ChatStoreMemory) DeleteMessage(_ context.Context, id snowflake.ID) error {
	s.l.Lock()
	defer s.l.Unlock()
	s.msgMap.Remove(id.Int64())
	return nil
}

func (s *ChatStoreMemory) LoadMessagesSince(_ context.Context, since time.Time) ([]*ChatMessage, error) {
	s.l.RLock()
	defer s.l.RUnlock()

	messages := []*ChatMessage{}
	it := s.msgMap.Iterator()
	for it.End(); it.Prev(); {
		m := it.Value().(*ChatMessage)
		if m.CreatedAt.After(since) {
			messages = append(messages, m)
		} else {
			// IDs are snowflakes and therefore sorted by time
			break
		}
	}
	return messages, nil
}

func (s *ChatStoreMemory) LoadNumLatestMessages(_ context.Context, num int) ([]*ChatMessage, error) {
	s.l.RLock()
	defer s.l.RUnlock()

	messages := []*ChatMessage{}
	it := s.msgMap.Iterator()
	i := 0
	for it.End(); it.Prev() && i < num; i++ {
		m := it.Value().(*ChatMessage)
		messages = append(messages, m)
	}
	return messages, nil
}
