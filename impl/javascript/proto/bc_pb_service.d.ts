// package: bc.exchange
// file: bc.proto

import * as bc_pb from "./bc_pb";
import * as core_pb from "./core_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BcGetFeaturedFeedMessages = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetFeedMessagesRequest;
  readonly responseType: typeof bc_pb.FeedMessages;
};

type BcGetSavedFeedMessages = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetFeedMessagesRequest;
  readonly responseType: typeof bc_pb.FeedMessages;
};

type BcGetEphemeralFeedMessages = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetFeedMessagesRequest;
  readonly responseType: typeof bc_pb.FeedMessages;
};

type BcGetRoveredBlockHash = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetRoveredBlockHashRequest;
  readonly responseType: typeof core_pb.Block;
};

type BcGetRoveredBlockHeight = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetRoveredBlockHeightRequest;
  readonly responseType: typeof core_pb.Block;
};

type BcGetRoveredBlocks = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetRoveredBlocksRequest;
  readonly responseType: typeof bc_pb.GetRoveredBlocksResponse;
};

type BcGetLatestRoveredBlocks = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.GetRoveredBlocksResponse;
};

type BcGetNrgSupply = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.GetNrgSupplyResponse;
};

type BcGetBlockHash = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlockHashRequest;
  readonly responseType: typeof core_pb.BcBlock;
};

type BcGetBlockHeight = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlockHeightRequest;
  readonly responseType: typeof core_pb.BcBlock;
};

type BcGetBlocksHeight = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlockHeightRequest;
  readonly responseType: typeof bc_pb.GetBlocksResponse;
};

type BcGetBlocks = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlocksRequest;
  readonly responseType: typeof bc_pb.GetBlocksResponse;
};

type BcGetLatestBlock = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof core_pb.BcBlock;
};

type BcGetLatestUTXOBlock = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof core_pb.BcBlock;
};

type BcGetTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetTxRequest;
  readonly responseType: typeof core_pb.Transaction;
};

type BcGetMarkedTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetMarkedTxRequest;
  readonly responseType: typeof core_pb.MarkedTransaction;
};

type BcGetMarkedTxsForMatchedOrder = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetMarkedTxs;
};

type BcGetTradeStatus = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetTradeStatusResponse;
};

type BcGetOutpointStatus = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetOutPointStatusResponse;
};

type BcGetTxClaimedBy = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof core_pb.Transaction;
};

type BcGetRawMempool = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.GetRawMempoolResponse;
};

type BcGetBlockByTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetTxRequest;
  readonly responseType: typeof core_pb.BcBlock;
};

type BcGetRoveredBlockForMarkedTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetMarkedTxRequest;
  readonly responseType: typeof core_pb.Block;
};

type BcHelp = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.HelpResponse;
};

type BcStats = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.StatsResponse;
};

type BcGetSettings = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.SettingsResponse;
};

type BcNewFeed = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.RpcFeedTransactionRequest;
  readonly responseType: typeof bc_pb.RpcTransactionResponse;
};

type BcUpdateFeed = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.RpcUpdateFeedTransactionRequest;
  readonly responseType: typeof bc_pb.RpcTransactionResponse;
};

type BcNewTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.RpcTransaction;
  readonly responseType: typeof bc_pb.RpcTransactionResponse;
};

type BcSendTx = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Transaction;
  readonly responseType: typeof bc_pb.RpcTransactionResponse;
};

type BcGetEmbBalance = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBalanceRequest;
  readonly responseType: typeof bc_pb.GetEmbBalanceResponse;
};

type BcGetBalance = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBalanceRequest;
  readonly responseType: typeof bc_pb.GetBalanceResponse;
};

type BcGetWallet = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBalanceRequest;
  readonly responseType: typeof core_pb.WalletData;
};

type BcGetSpendableOutpoints = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetSpendableCollateralRequest;
  readonly responseType: typeof core_pb.WalletData;
};

type BcGetSpendableCollateral = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetSpendableCollateralRequest;
  readonly responseType: typeof bc_pb.GetSpendableCollateralResponse;
};

type BcGetUnlockTakerTxParams = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetUnlockTakerTxParamsRequest;
  readonly responseType: typeof bc_pb.GetUnlockTakerTxParamsResponse;
};

type BcGetByteFeeMultiplier = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.GetByteFeeResponse;
};

type BcGetTransfers = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.TransferRequest;
  readonly responseType: typeof bc_pb.TransferResponse;
};

type BcGetTakerForMaker = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetOutPointRequest;
};

type BcGetOpenOrder = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetOpenOrdersResponse;
};

type BcGetOpenCallbackOrder = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetOpenOrdersResponse;
};

type BcGetMatchedOrder = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof bc_pb.GetMatchedOrdersResponse;
};

type BcGetOpenOrders = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetSpendableCollateralRequest;
  readonly responseType: typeof bc_pb.GetOpenOrdersResponse;
};

type BcGetMatchedOrders = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetSpendableCollateralRequest;
  readonly responseType: typeof bc_pb.GetMatchedOrdersResponse;
};

type BcGetHistoricalOrders = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetHistoryRequest;
  readonly responseType: typeof bc_pb.GetHistoricalOrdersResponse;
};

type BcGetUnmatchedOrders = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBalanceRequest;
  readonly responseType: typeof bc_pb.GetOpenOrdersResponse;
};

type BcGetOriginalMakerOrder = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetOutPointRequest;
  readonly responseType: typeof core_pb.Transaction;
};

type BcGetUtxos = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetUtxosRequest;
  readonly responseType: typeof core_pb.Utxos;
};

type BcGetUTXOLength = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetUtxoLengthRequest;
  readonly responseType: typeof bc_pb.GetUtxoLengthResponse;
};

type BcGetSTXOLength = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetUtxoLengthRequest;
  readonly responseType: typeof bc_pb.GetUtxoLengthResponse;
};

type BcGetBlocksByRoveredHash = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlocksByRoveredHashRequest;
  readonly responseType: typeof bc_pb.GetBlocksByRoveredHashResponse;
};

type BcGetBlake2bl = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.GetBlake2blRequest;
  readonly responseType: typeof bc_pb.GetBlake2blResponse;
};

type BcGetBcAddressViaVanity = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof bc_pb.VanityConvertRequest;
  readonly responseType: typeof bc_pb.VanityConvertResponse;
};

type BcGetCurrentWork = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.CurrentWork;
};

type BcGetSyncStatus = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.SyncStatus;
};

type BcGetFastSyncStatus = {
  readonly methodName: string;
  readonly service: typeof Bc;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_pb.Null;
  readonly responseType: typeof bc_pb.SyncStatus;
};

export class Bc {
  static readonly serviceName: string;
  static readonly GetFeaturedFeedMessages: BcGetFeaturedFeedMessages;
  static readonly GetSavedFeedMessages: BcGetSavedFeedMessages;
  static readonly GetEphemeralFeedMessages: BcGetEphemeralFeedMessages;
  static readonly GetRoveredBlockHash: BcGetRoveredBlockHash;
  static readonly GetRoveredBlockHeight: BcGetRoveredBlockHeight;
  static readonly GetRoveredBlocks: BcGetRoveredBlocks;
  static readonly GetLatestRoveredBlocks: BcGetLatestRoveredBlocks;
  static readonly GetNrgSupply: BcGetNrgSupply;
  static readonly GetBlockHash: BcGetBlockHash;
  static readonly GetBlockHeight: BcGetBlockHeight;
  static readonly GetBlocksHeight: BcGetBlocksHeight;
  static readonly GetBlocks: BcGetBlocks;
  static readonly GetLatestBlock: BcGetLatestBlock;
  static readonly GetLatestUTXOBlock: BcGetLatestUTXOBlock;
  static readonly GetTx: BcGetTx;
  static readonly GetMarkedTx: BcGetMarkedTx;
  static readonly GetMarkedTxsForMatchedOrder: BcGetMarkedTxsForMatchedOrder;
  static readonly GetTradeStatus: BcGetTradeStatus;
  static readonly GetOutpointStatus: BcGetOutpointStatus;
  static readonly GetTxClaimedBy: BcGetTxClaimedBy;
  static readonly GetRawMempool: BcGetRawMempool;
  static readonly GetBlockByTx: BcGetBlockByTx;
  static readonly GetRoveredBlockForMarkedTx: BcGetRoveredBlockForMarkedTx;
  static readonly Help: BcHelp;
  static readonly Stats: BcStats;
  static readonly GetSettings: BcGetSettings;
  static readonly NewFeed: BcNewFeed;
  static readonly UpdateFeed: BcUpdateFeed;
  static readonly NewTx: BcNewTx;
  static readonly SendTx: BcSendTx;
  static readonly GetEmbBalance: BcGetEmbBalance;
  static readonly GetBalance: BcGetBalance;
  static readonly GetWallet: BcGetWallet;
  static readonly GetSpendableOutpoints: BcGetSpendableOutpoints;
  static readonly GetSpendableCollateral: BcGetSpendableCollateral;
  static readonly GetUnlockTakerTxParams: BcGetUnlockTakerTxParams;
  static readonly GetByteFeeMultiplier: BcGetByteFeeMultiplier;
  static readonly GetTransfers: BcGetTransfers;
  static readonly GetTakerForMaker: BcGetTakerForMaker;
  static readonly GetOpenOrder: BcGetOpenOrder;
  static readonly GetOpenCallbackOrder: BcGetOpenCallbackOrder;
  static readonly GetMatchedOrder: BcGetMatchedOrder;
  static readonly GetOpenOrders: BcGetOpenOrders;
  static readonly GetMatchedOrders: BcGetMatchedOrders;
  static readonly GetHistoricalOrders: BcGetHistoricalOrders;
  static readonly GetUnmatchedOrders: BcGetUnmatchedOrders;
  static readonly GetOriginalMakerOrder: BcGetOriginalMakerOrder;
  static readonly GetUtxos: BcGetUtxos;
  static readonly GetUTXOLength: BcGetUTXOLength;
  static readonly GetSTXOLength: BcGetSTXOLength;
  static readonly GetBlocksByRoveredHash: BcGetBlocksByRoveredHash;
  static readonly GetBlake2bl: BcGetBlake2bl;
  static readonly GetBcAddressViaVanity: BcGetBcAddressViaVanity;
  static readonly GetCurrentWork: BcGetCurrentWork;
  static readonly GetSyncStatus: BcGetSyncStatus;
  static readonly GetFastSyncStatus: BcGetFastSyncStatus;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BcClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getFeaturedFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getFeaturedFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getSavedFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getSavedFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getEphemeralFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getEphemeralFeedMessages(
    requestMessage: bc_pb.GetFeedMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.FeedMessages|null) => void
  ): UnaryResponse;
  getRoveredBlockHash(
    requestMessage: bc_pb.GetRoveredBlockHashRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  getRoveredBlockHash(
    requestMessage: bc_pb.GetRoveredBlockHashRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  getRoveredBlockHeight(
    requestMessage: bc_pb.GetRoveredBlockHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  getRoveredBlockHeight(
    requestMessage: bc_pb.GetRoveredBlockHeightRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  getRoveredBlocks(
    requestMessage: bc_pb.GetRoveredBlocksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRoveredBlocksResponse|null) => void
  ): UnaryResponse;
  getRoveredBlocks(
    requestMessage: bc_pb.GetRoveredBlocksRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRoveredBlocksResponse|null) => void
  ): UnaryResponse;
  getLatestRoveredBlocks(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRoveredBlocksResponse|null) => void
  ): UnaryResponse;
  getLatestRoveredBlocks(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRoveredBlocksResponse|null) => void
  ): UnaryResponse;
  getNrgSupply(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetNrgSupplyResponse|null) => void
  ): UnaryResponse;
  getNrgSupply(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetNrgSupplyResponse|null) => void
  ): UnaryResponse;
  getBlockHash(
    requestMessage: bc_pb.GetBlockHashRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getBlockHash(
    requestMessage: bc_pb.GetBlockHashRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getBlockHeight(
    requestMessage: bc_pb.GetBlockHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getBlockHeight(
    requestMessage: bc_pb.GetBlockHeightRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getBlocksHeight(
    requestMessage: bc_pb.GetBlockHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksResponse|null) => void
  ): UnaryResponse;
  getBlocksHeight(
    requestMessage: bc_pb.GetBlockHeightRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksResponse|null) => void
  ): UnaryResponse;
  getBlocks(
    requestMessage: bc_pb.GetBlocksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksResponse|null) => void
  ): UnaryResponse;
  getBlocks(
    requestMessage: bc_pb.GetBlocksRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksResponse|null) => void
  ): UnaryResponse;
  getLatestBlock(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getLatestBlock(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getLatestUTXOBlock(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getLatestUTXOBlock(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: bc_pb.GetTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: bc_pb.GetTxRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getMarkedTx(
    requestMessage: bc_pb.GetMarkedTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.MarkedTransaction|null) => void
  ): UnaryResponse;
  getMarkedTx(
    requestMessage: bc_pb.GetMarkedTxRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.MarkedTransaction|null) => void
  ): UnaryResponse;
  getMarkedTxsForMatchedOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMarkedTxs|null) => void
  ): UnaryResponse;
  getMarkedTxsForMatchedOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMarkedTxs|null) => void
  ): UnaryResponse;
  getTradeStatus(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetTradeStatusResponse|null) => void
  ): UnaryResponse;
  getTradeStatus(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetTradeStatusResponse|null) => void
  ): UnaryResponse;
  getOutpointStatus(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOutPointStatusResponse|null) => void
  ): UnaryResponse;
  getOutpointStatus(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOutPointStatusResponse|null) => void
  ): UnaryResponse;
  getTxClaimedBy(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getTxClaimedBy(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getRawMempool(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRawMempoolResponse|null) => void
  ): UnaryResponse;
  getRawMempool(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetRawMempoolResponse|null) => void
  ): UnaryResponse;
  getBlockByTx(
    requestMessage: bc_pb.GetTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getBlockByTx(
    requestMessage: bc_pb.GetTxRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.BcBlock|null) => void
  ): UnaryResponse;
  getRoveredBlockForMarkedTx(
    requestMessage: bc_pb.GetMarkedTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  getRoveredBlockForMarkedTx(
    requestMessage: bc_pb.GetMarkedTxRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Block|null) => void
  ): UnaryResponse;
  help(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.HelpResponse|null) => void
  ): UnaryResponse;
  help(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.HelpResponse|null) => void
  ): UnaryResponse;
  stats(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.StatsResponse|null) => void
  ): UnaryResponse;
  stats(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.StatsResponse|null) => void
  ): UnaryResponse;
  getSettings(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SettingsResponse|null) => void
  ): UnaryResponse;
  getSettings(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SettingsResponse|null) => void
  ): UnaryResponse;
  newFeed(
    requestMessage: bc_pb.RpcFeedTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  newFeed(
    requestMessage: bc_pb.RpcFeedTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  updateFeed(
    requestMessage: bc_pb.RpcUpdateFeedTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  updateFeed(
    requestMessage: bc_pb.RpcUpdateFeedTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  newTx(
    requestMessage: bc_pb.RpcTransaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  newTx(
    requestMessage: bc_pb.RpcTransaction,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  sendTx(
    requestMessage: core_pb.Transaction,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  sendTx(
    requestMessage: core_pb.Transaction,
    callback: (error: ServiceError|null, responseMessage: bc_pb.RpcTransactionResponse|null) => void
  ): UnaryResponse;
  getEmbBalance(
    requestMessage: bc_pb.GetBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetEmbBalanceResponse|null) => void
  ): UnaryResponse;
  getEmbBalance(
    requestMessage: bc_pb.GetBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetEmbBalanceResponse|null) => void
  ): UnaryResponse;
  getBalance(
    requestMessage: bc_pb.GetBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBalanceResponse|null) => void
  ): UnaryResponse;
  getBalance(
    requestMessage: bc_pb.GetBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBalanceResponse|null) => void
  ): UnaryResponse;
  getWallet(
    requestMessage: bc_pb.GetBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.WalletData|null) => void
  ): UnaryResponse;
  getWallet(
    requestMessage: bc_pb.GetBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.WalletData|null) => void
  ): UnaryResponse;
  getSpendableOutpoints(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.WalletData|null) => void
  ): UnaryResponse;
  getSpendableOutpoints(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.WalletData|null) => void
  ): UnaryResponse;
  getSpendableCollateral(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetSpendableCollateralResponse|null) => void
  ): UnaryResponse;
  getSpendableCollateral(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetSpendableCollateralResponse|null) => void
  ): UnaryResponse;
  getUnlockTakerTxParams(
    requestMessage: bc_pb.GetUnlockTakerTxParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUnlockTakerTxParamsResponse|null) => void
  ): UnaryResponse;
  getUnlockTakerTxParams(
    requestMessage: bc_pb.GetUnlockTakerTxParamsRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUnlockTakerTxParamsResponse|null) => void
  ): UnaryResponse;
  getByteFeeMultiplier(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetByteFeeResponse|null) => void
  ): UnaryResponse;
  getByteFeeMultiplier(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetByteFeeResponse|null) => void
  ): UnaryResponse;
  getTransfers(
    requestMessage: bc_pb.TransferRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.TransferResponse|null) => void
  ): UnaryResponse;
  getTransfers(
    requestMessage: bc_pb.TransferRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.TransferResponse|null) => void
  ): UnaryResponse;
  getTakerForMaker(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOutPointRequest|null) => void
  ): UnaryResponse;
  getTakerForMaker(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOutPointRequest|null) => void
  ): UnaryResponse;
  getOpenOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getOpenOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getOpenCallbackOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getOpenCallbackOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getMatchedOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMatchedOrdersResponse|null) => void
  ): UnaryResponse;
  getMatchedOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMatchedOrdersResponse|null) => void
  ): UnaryResponse;
  getOpenOrders(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getOpenOrders(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getMatchedOrders(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMatchedOrdersResponse|null) => void
  ): UnaryResponse;
  getMatchedOrders(
    requestMessage: bc_pb.GetSpendableCollateralRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetMatchedOrdersResponse|null) => void
  ): UnaryResponse;
  getHistoricalOrders(
    requestMessage: bc_pb.GetHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetHistoricalOrdersResponse|null) => void
  ): UnaryResponse;
  getHistoricalOrders(
    requestMessage: bc_pb.GetHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetHistoricalOrdersResponse|null) => void
  ): UnaryResponse;
  getUnmatchedOrders(
    requestMessage: bc_pb.GetBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getUnmatchedOrders(
    requestMessage: bc_pb.GetBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetOpenOrdersResponse|null) => void
  ): UnaryResponse;
  getOriginalMakerOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getOriginalMakerOrder(
    requestMessage: bc_pb.GetOutPointRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Transaction|null) => void
  ): UnaryResponse;
  getUtxos(
    requestMessage: bc_pb.GetUtxosRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_pb.Utxos|null) => void
  ): UnaryResponse;
  getUtxos(
    requestMessage: bc_pb.GetUtxosRequest,
    callback: (error: ServiceError|null, responseMessage: core_pb.Utxos|null) => void
  ): UnaryResponse;
  getUTXOLength(
    requestMessage: bc_pb.GetUtxoLengthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUtxoLengthResponse|null) => void
  ): UnaryResponse;
  getUTXOLength(
    requestMessage: bc_pb.GetUtxoLengthRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUtxoLengthResponse|null) => void
  ): UnaryResponse;
  getSTXOLength(
    requestMessage: bc_pb.GetUtxoLengthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUtxoLengthResponse|null) => void
  ): UnaryResponse;
  getSTXOLength(
    requestMessage: bc_pb.GetUtxoLengthRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetUtxoLengthResponse|null) => void
  ): UnaryResponse;
  getBlocksByRoveredHash(
    requestMessage: bc_pb.GetBlocksByRoveredHashRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksByRoveredHashResponse|null) => void
  ): UnaryResponse;
  getBlocksByRoveredHash(
    requestMessage: bc_pb.GetBlocksByRoveredHashRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlocksByRoveredHashResponse|null) => void
  ): UnaryResponse;
  getBlake2bl(
    requestMessage: bc_pb.GetBlake2blRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlake2blResponse|null) => void
  ): UnaryResponse;
  getBlake2bl(
    requestMessage: bc_pb.GetBlake2blRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.GetBlake2blResponse|null) => void
  ): UnaryResponse;
  getBcAddressViaVanity(
    requestMessage: bc_pb.VanityConvertRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.VanityConvertResponse|null) => void
  ): UnaryResponse;
  getBcAddressViaVanity(
    requestMessage: bc_pb.VanityConvertRequest,
    callback: (error: ServiceError|null, responseMessage: bc_pb.VanityConvertResponse|null) => void
  ): UnaryResponse;
  getCurrentWork(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.CurrentWork|null) => void
  ): UnaryResponse;
  getCurrentWork(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.CurrentWork|null) => void
  ): UnaryResponse;
  getSyncStatus(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SyncStatus|null) => void
  ): UnaryResponse;
  getSyncStatus(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SyncStatus|null) => void
  ): UnaryResponse;
  getFastSyncStatus(
    requestMessage: core_pb.Null,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SyncStatus|null) => void
  ): UnaryResponse;
  getFastSyncStatus(
    requestMessage: core_pb.Null,
    callback: (error: ServiceError|null, responseMessage: bc_pb.SyncStatus|null) => void
  ): UnaryResponse;
}

