// package: jungletv
// file: jungletv.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class SignInRequest extends jspb.Message {
  getRewardAddress(): string;
  setRewardAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInRequest;
  static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
  export type AsObject = {
    rewardAddress: string,
  }
}

export class SignInResponse extends jspb.Message {
  getAuthToken(): string;
  setAuthToken(value: string): void;

  hasTokenExpiration(): boolean;
  clearTokenExpiration(): void;
  getTokenExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTokenExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInResponse;
  static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
  export type AsObject = {
    authToken: string,
    tokenExpiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class EnqueueYouTubeVideoData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueYouTubeVideoData.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueYouTubeVideoData): EnqueueYouTubeVideoData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueYouTubeVideoData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueYouTubeVideoData;
  static deserializeBinaryFromReader(message: EnqueueYouTubeVideoData, reader: jspb.BinaryReader): EnqueueYouTubeVideoData;
}

export namespace EnqueueYouTubeVideoData {
  export type AsObject = {
    id: string,
  }
}

export class EnqueueStubData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueStubData.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueStubData): EnqueueStubData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueStubData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueStubData;
  static deserializeBinaryFromReader(message: EnqueueStubData, reader: jspb.BinaryReader): EnqueueStubData;
}

export namespace EnqueueStubData {
  export type AsObject = {
  }
}

export class EnqueueMediaRequest extends jspb.Message {
  getUnskippable(): boolean;
  setUnskippable(value: boolean): void;

  hasStubData(): boolean;
  clearStubData(): void;
  getStubData(): EnqueueStubData | undefined;
  setStubData(value?: EnqueueStubData): void;

  hasYoutubeVideoData(): boolean;
  clearYoutubeVideoData(): void;
  getYoutubeVideoData(): EnqueueYouTubeVideoData | undefined;
  setYoutubeVideoData(value?: EnqueueYouTubeVideoData): void;

  getMediaInfoCase(): EnqueueMediaRequest.MediaInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMediaRequest): EnqueueMediaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMediaRequest;
  static deserializeBinaryFromReader(message: EnqueueMediaRequest, reader: jspb.BinaryReader): EnqueueMediaRequest;
}

export namespace EnqueueMediaRequest {
  export type AsObject = {
    unskippable: boolean,
    stubData?: EnqueueStubData.AsObject,
    youtubeVideoData?: EnqueueYouTubeVideoData.AsObject,
  }

  export enum MediaInfoCase {
    MEDIA_INFO_NOT_SET = 0,
    STUB_DATA = 2,
    YOUTUBE_VIDEO_DATA = 3,
  }
}

export class EnqueueMediaResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): EnqueueMediaTicket | undefined;
  setTicket(value?: EnqueueMediaTicket): void;

  hasFailure(): boolean;
  clearFailure(): void;
  getFailure(): EnqueueMediaFailure | undefined;
  setFailure(value?: EnqueueMediaFailure): void;

  getEnqueueResponseCase(): EnqueueMediaResponse.EnqueueResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMediaResponse): EnqueueMediaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMediaResponse;
  static deserializeBinaryFromReader(message: EnqueueMediaResponse, reader: jspb.BinaryReader): EnqueueMediaResponse;
}

export namespace EnqueueMediaResponse {
  export type AsObject = {
    ticket?: EnqueueMediaTicket.AsObject,
    failure?: EnqueueMediaFailure.AsObject,
  }

  export enum EnqueueResponseCase {
    ENQUEUE_RESPONSE_NOT_SET = 0,
    TICKET = 1,
    FAILURE = 2,
  }
}

export class EnqueueMediaFailure extends jspb.Message {
  getFailureReason(): string;
  setFailureReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMediaFailure.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMediaFailure): EnqueueMediaFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMediaFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMediaFailure;
  static deserializeBinaryFromReader(message: EnqueueMediaFailure, reader: jspb.BinaryReader): EnqueueMediaFailure;
}

export namespace EnqueueMediaFailure {
  export type AsObject = {
    failureReason: string,
  }
}

export class EnqueueMediaTicket extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): EnqueueMediaTicketStatusMap[keyof EnqueueMediaTicketStatusMap];
  setStatus(value: EnqueueMediaTicketStatusMap[keyof EnqueueMediaTicketStatusMap]): void;

  getPaymentAddress(): string;
  setPaymentAddress(value: string): void;

  getEnqueuePrice(): string;
  setEnqueuePrice(value: string): void;

  getPlayNextPrice(): string;
  setPlayNextPrice(value: string): void;

  getPlayNowPrice(): string;
  setPlayNowPrice(value: string): void;

  hasExpiration(): boolean;
  clearExpiration(): void;
  getExpiration(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiration(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUnskippable(): boolean;
  setUnskippable(value: boolean): void;

  getCurrentlyPlayingIsUnskippable(): boolean;
  setCurrentlyPlayingIsUnskippable(value: boolean): void;

  hasYoutubeVideoData(): boolean;
  clearYoutubeVideoData(): void;
  getYoutubeVideoData(): QueueYouTubeVideoData | undefined;
  setYoutubeVideoData(value?: QueueYouTubeVideoData): void;

  getMediaInfoCase(): EnqueueMediaTicket.MediaInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMediaTicket.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMediaTicket): EnqueueMediaTicket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMediaTicket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMediaTicket;
  static deserializeBinaryFromReader(message: EnqueueMediaTicket, reader: jspb.BinaryReader): EnqueueMediaTicket;
}

export namespace EnqueueMediaTicket {
  export type AsObject = {
    id: string,
    status: EnqueueMediaTicketStatusMap[keyof EnqueueMediaTicketStatusMap],
    paymentAddress: string,
    enqueuePrice: string,
    playNextPrice: string,
    playNowPrice: string,
    expiration?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unskippable: boolean,
    currentlyPlayingIsUnskippable: boolean,
    youtubeVideoData?: QueueYouTubeVideoData.AsObject,
  }

  export enum MediaInfoCase {
    MEDIA_INFO_NOT_SET = 0,
    YOUTUBE_VIDEO_DATA = 10,
  }
}

export class MonitorTicketRequest extends jspb.Message {
  getTicketId(): string;
  setTicketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitorTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonitorTicketRequest): MonitorTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitorTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitorTicketRequest;
  static deserializeBinaryFromReader(message: MonitorTicketRequest, reader: jspb.BinaryReader): MonitorTicketRequest;
}

export namespace MonitorTicketRequest {
  export type AsObject = {
    ticketId: string,
  }
}

export class ConsumeMediaRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConsumeMediaRequest): ConsumeMediaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsumeMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeMediaRequest;
  static deserializeBinaryFromReader(message: ConsumeMediaRequest, reader: jspb.BinaryReader): ConsumeMediaRequest;
}

export namespace ConsumeMediaRequest {
  export type AsObject = {
  }
}

export class NowPlayingStubData extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NowPlayingStubData.AsObject;
  static toObject(includeInstance: boolean, msg: NowPlayingStubData): NowPlayingStubData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NowPlayingStubData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NowPlayingStubData;
  static deserializeBinaryFromReader(message: NowPlayingStubData, reader: jspb.BinaryReader): NowPlayingStubData;
}

export namespace NowPlayingStubData {
  export type AsObject = {
  }
}

export class NowPlayingYouTubeVideoData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NowPlayingYouTubeVideoData.AsObject;
  static toObject(includeInstance: boolean, msg: NowPlayingYouTubeVideoData): NowPlayingYouTubeVideoData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NowPlayingYouTubeVideoData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NowPlayingYouTubeVideoData;
  static deserializeBinaryFromReader(message: NowPlayingYouTubeVideoData, reader: jspb.BinaryReader): NowPlayingYouTubeVideoData;
}

export namespace NowPlayingYouTubeVideoData {
  export type AsObject = {
    id: string,
  }
}

export class MediaConsumptionCheckpoint extends jspb.Message {
  getMediaPresent(): boolean;
  setMediaPresent(value: boolean): void;

  hasCurrentPosition(): boolean;
  clearCurrentPosition(): void;
  getCurrentPosition(): google_protobuf_duration_pb.Duration | undefined;
  setCurrentPosition(value?: google_protobuf_duration_pb.Duration): void;

  hasRequestedBy(): boolean;
  clearRequestedBy(): void;
  getRequestedBy(): User | undefined;
  setRequestedBy(value?: User): void;

  getRequestCost(): string;
  setRequestCost(value: string): void;

  getCurrentlyWatching(): number;
  setCurrentlyWatching(value: number): void;

  hasReward(): boolean;
  clearReward(): void;
  getReward(): string;
  setReward(value: string): void;

  hasActivityChallenge(): boolean;
  clearActivityChallenge(): void;
  getActivityChallenge(): string;
  setActivityChallenge(value: string): void;

  hasStubData(): boolean;
  clearStubData(): void;
  getStubData(): NowPlayingStubData | undefined;
  setStubData(value?: NowPlayingStubData): void;

  hasYoutubeVideoData(): boolean;
  clearYoutubeVideoData(): void;
  getYoutubeVideoData(): NowPlayingYouTubeVideoData | undefined;
  setYoutubeVideoData(value?: NowPlayingYouTubeVideoData): void;

  getMediaInfoCase(): MediaConsumptionCheckpoint.MediaInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaConsumptionCheckpoint.AsObject;
  static toObject(includeInstance: boolean, msg: MediaConsumptionCheckpoint): MediaConsumptionCheckpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaConsumptionCheckpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaConsumptionCheckpoint;
  static deserializeBinaryFromReader(message: MediaConsumptionCheckpoint, reader: jspb.BinaryReader): MediaConsumptionCheckpoint;
}

export namespace MediaConsumptionCheckpoint {
  export type AsObject = {
    mediaPresent: boolean,
    currentPosition?: google_protobuf_duration_pb.Duration.AsObject,
    requestedBy?: User.AsObject,
    requestCost: string,
    currentlyWatching: number,
    reward: string,
    activityChallenge: string,
    stubData?: NowPlayingStubData.AsObject,
    youtubeVideoData?: NowPlayingYouTubeVideoData.AsObject,
  }

  export enum MediaInfoCase {
    MEDIA_INFO_NOT_SET = 0,
    STUB_DATA = 9,
    YOUTUBE_VIDEO_DATA = 10,
  }
}

export class MonitorQueueRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonitorQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MonitorQueueRequest): MonitorQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonitorQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonitorQueueRequest;
  static deserializeBinaryFromReader(message: MonitorQueueRequest, reader: jspb.BinaryReader): MonitorQueueRequest;
}

export namespace MonitorQueueRequest {
  export type AsObject = {
  }
}

export class Queue extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<QueueEntry>;
  setEntriesList(value: Array<QueueEntry>): void;
  addEntries(value?: QueueEntry, index?: number): QueueEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Queue.AsObject;
  static toObject(includeInstance: boolean, msg: Queue): Queue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Queue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Queue;
  static deserializeBinaryFromReader(message: Queue, reader: jspb.BinaryReader): Queue;
}

export namespace Queue {
  export type AsObject = {
    entriesList: Array<QueueEntry.AsObject>,
  }
}

export class QueueYouTubeVideoData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): void;

  getChannelTitle(): string;
  setChannelTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueYouTubeVideoData.AsObject;
  static toObject(includeInstance: boolean, msg: QueueYouTubeVideoData): QueueYouTubeVideoData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueYouTubeVideoData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueYouTubeVideoData;
  static deserializeBinaryFromReader(message: QueueYouTubeVideoData, reader: jspb.BinaryReader): QueueYouTubeVideoData;
}

export namespace QueueYouTubeVideoData {
  export type AsObject = {
    id: string,
    title: string,
    thumbnailUrl: string,
    channelTitle: string,
  }
}

export class QueueEntry extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRequestedBy(): boolean;
  clearRequestedBy(): void;
  getRequestedBy(): User | undefined;
  setRequestedBy(value?: User): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): google_protobuf_duration_pb.Duration | undefined;
  setLength(value?: google_protobuf_duration_pb.Duration): void;

  getUnskippable(): boolean;
  setUnskippable(value: boolean): void;

  hasYoutubeVideoData(): boolean;
  clearYoutubeVideoData(): void;
  getYoutubeVideoData(): QueueYouTubeVideoData | undefined;
  setYoutubeVideoData(value?: QueueYouTubeVideoData): void;

  getMediaInfoCase(): QueueEntry.MediaInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueueEntry.AsObject;
  static toObject(includeInstance: boolean, msg: QueueEntry): QueueEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueueEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueueEntry;
  static deserializeBinaryFromReader(message: QueueEntry, reader: jspb.BinaryReader): QueueEntry;
}

export namespace QueueEntry {
  export type AsObject = {
    id: string,
    requestedBy?: User.AsObject,
    length?: google_protobuf_duration_pb.Duration.AsObject,
    unskippable: boolean,
    youtubeVideoData?: QueueYouTubeVideoData.AsObject,
  }

  export enum MediaInfoCase {
    MEDIA_INFO_NOT_SET = 0,
    YOUTUBE_VIDEO_DATA = 5,
  }
}

export class User extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    address: string,
  }
}

export class RewardInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RewardInfoRequest): RewardInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RewardInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardInfoRequest;
  static deserializeBinaryFromReader(message: RewardInfoRequest, reader: jspb.BinaryReader): RewardInfoRequest;
}

export namespace RewardInfoRequest {
  export type AsObject = {
  }
}

export class RewardInfoResponse extends jspb.Message {
  getRewardAddress(): string;
  setRewardAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RewardInfoResponse): RewardInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RewardInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardInfoResponse;
  static deserializeBinaryFromReader(message: RewardInfoResponse, reader: jspb.BinaryReader): RewardInfoResponse;
}

export namespace RewardInfoResponse {
  export type AsObject = {
    rewardAddress: string,
  }
}

export class RemoveQueueEntryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveQueueEntryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveQueueEntryRequest): RemoveQueueEntryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveQueueEntryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveQueueEntryRequest;
  static deserializeBinaryFromReader(message: RemoveQueueEntryRequest, reader: jspb.BinaryReader): RemoveQueueEntryRequest;
}

export namespace RemoveQueueEntryRequest {
  export type AsObject = {
    id: string,
  }
}

export class RemoveQueueEntryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveQueueEntryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveQueueEntryResponse): RemoveQueueEntryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveQueueEntryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveQueueEntryResponse;
  static deserializeBinaryFromReader(message: RemoveQueueEntryResponse, reader: jspb.BinaryReader): RemoveQueueEntryResponse;
}

export namespace RemoveQueueEntryResponse {
  export type AsObject = {
  }
}

export class ForciblyEnqueueTicketRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEnqueueType(): ForcedTicketEnqueueTypeMap[keyof ForcedTicketEnqueueTypeMap];
  setEnqueueType(value: ForcedTicketEnqueueTypeMap[keyof ForcedTicketEnqueueTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForciblyEnqueueTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForciblyEnqueueTicketRequest): ForciblyEnqueueTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForciblyEnqueueTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForciblyEnqueueTicketRequest;
  static deserializeBinaryFromReader(message: ForciblyEnqueueTicketRequest, reader: jspb.BinaryReader): ForciblyEnqueueTicketRequest;
}

export namespace ForciblyEnqueueTicketRequest {
  export type AsObject = {
    id: string,
    enqueueType: ForcedTicketEnqueueTypeMap[keyof ForcedTicketEnqueueTypeMap],
  }
}

export class ForciblyEnqueueTicketResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForciblyEnqueueTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForciblyEnqueueTicketResponse): ForciblyEnqueueTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForciblyEnqueueTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForciblyEnqueueTicketResponse;
  static deserializeBinaryFromReader(message: ForciblyEnqueueTicketResponse, reader: jspb.BinaryReader): ForciblyEnqueueTicketResponse;
}

export namespace ForciblyEnqueueTicketResponse {
  export type AsObject = {
  }
}

export class SubmitActivityChallengeRequest extends jspb.Message {
  getChallenge(): string;
  setChallenge(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitActivityChallengeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitActivityChallengeRequest): SubmitActivityChallengeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitActivityChallengeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitActivityChallengeRequest;
  static deserializeBinaryFromReader(message: SubmitActivityChallengeRequest, reader: jspb.BinaryReader): SubmitActivityChallengeRequest;
}

export namespace SubmitActivityChallengeRequest {
  export type AsObject = {
    challenge: string,
  }
}

export class SubmitActivityChallengeResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitActivityChallengeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitActivityChallengeResponse): SubmitActivityChallengeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubmitActivityChallengeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitActivityChallengeResponse;
  static deserializeBinaryFromReader(message: SubmitActivityChallengeResponse, reader: jspb.BinaryReader): SubmitActivityChallengeResponse;
}

export namespace SubmitActivityChallengeResponse {
  export type AsObject = {
  }
}

export interface EnqueueMediaTicketStatusMap {
  ACTIVE: 0;
  PAID: 1;
  EXPIRED: 2;
}

export const EnqueueMediaTicketStatus: EnqueueMediaTicketStatusMap;

export interface ForcedTicketEnqueueTypeMap {
  ENQUEUE: 0;
  PLAY_NEXT: 1;
  PLAY_NOW: 2;
}

export const ForcedTicketEnqueueType: ForcedTicketEnqueueTypeMap;

