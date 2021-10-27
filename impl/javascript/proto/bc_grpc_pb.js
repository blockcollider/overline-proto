// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var bc_pb = require('./bc_pb.js');
var core_pb = require('./core_pb.js');

function serialize_bc_core_BcBlock(arg) {
  if (!(arg instanceof core_pb.BcBlock)) {
    throw new Error('Expected argument of type bc.core.BcBlock');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_BcBlock(buffer_arg) {
  return core_pb.BcBlock.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_Block(arg) {
  if (!(arg instanceof core_pb.Block)) {
    throw new Error('Expected argument of type bc.core.Block');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Block(buffer_arg) {
  return core_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_MarkedTransaction(arg) {
  if (!(arg instanceof core_pb.MarkedTransaction)) {
    throw new Error('Expected argument of type bc.core.MarkedTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_MarkedTransaction(buffer_arg) {
  return core_pb.MarkedTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_Null(arg) {
  if (!(arg instanceof core_pb.Null)) {
    throw new Error('Expected argument of type bc.core.Null');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Null(buffer_arg) {
  return core_pb.Null.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_Transaction(arg) {
  if (!(arg instanceof core_pb.Transaction)) {
    throw new Error('Expected argument of type bc.core.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Transaction(buffer_arg) {
  return core_pb.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_Utxos(arg) {
  if (!(arg instanceof core_pb.Utxos)) {
    throw new Error('Expected argument of type bc.core.Utxos');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_Utxos(buffer_arg) {
  return core_pb.Utxos.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_core_WalletData(arg) {
  if (!(arg instanceof core_pb.WalletData)) {
    throw new Error('Expected argument of type bc.core.WalletData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_core_WalletData(buffer_arg) {
  return core_pb.WalletData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_CurrentWork(arg) {
  if (!(arg instanceof bc_pb.CurrentWork)) {
    throw new Error('Expected argument of type bc.exchange.CurrentWork');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_CurrentWork(buffer_arg) {
  return bc_pb.CurrentWork.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBalanceRequest(arg) {
  if (!(arg instanceof bc_pb.GetBalanceRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetBalanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBalanceRequest(buffer_arg) {
  return bc_pb.GetBalanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBalanceResponse(arg) {
  if (!(arg instanceof bc_pb.GetBalanceResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBalanceResponse(buffer_arg) {
  return bc_pb.GetBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlake2blRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlake2blRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetBlake2blRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlake2blRequest(buffer_arg) {
  return bc_pb.GetBlake2blRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlake2blResponse(arg) {
  if (!(arg instanceof bc_pb.GetBlake2blResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetBlake2blResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlake2blResponse(buffer_arg) {
  return bc_pb.GetBlake2blResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlockHashRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlockHashRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlockHashRequest(buffer_arg) {
  return bc_pb.GetBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlockHeightRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlockHeightRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlockHeightRequest(buffer_arg) {
  return bc_pb.GetBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlocksRequest(arg) {
  if (!(arg instanceof bc_pb.GetBlocksRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlocksRequest(buffer_arg) {
  return bc_pb.GetBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetBlocksResponse(arg) {
  if (!(arg instanceof bc_pb.GetBlocksResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetBlocksResponse(buffer_arg) {
  return bc_pb.GetBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetByteFeeResponse(arg) {
  if (!(arg instanceof bc_pb.GetByteFeeResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetByteFeeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetByteFeeResponse(buffer_arg) {
  return bc_pb.GetByteFeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetEmbBalanceResponse(arg) {
  if (!(arg instanceof bc_pb.GetEmbBalanceResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetEmbBalanceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetEmbBalanceResponse(buffer_arg) {
  return bc_pb.GetEmbBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetHistoricalOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetHistoricalOrdersResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetHistoricalOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetHistoricalOrdersResponse(buffer_arg) {
  return bc_pb.GetHistoricalOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetHistoryRequest(arg) {
  if (!(arg instanceof bc_pb.GetHistoryRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetHistoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetHistoryRequest(buffer_arg) {
  return bc_pb.GetHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetMarkedTxRequest(arg) {
  if (!(arg instanceof bc_pb.GetMarkedTxRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetMarkedTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetMarkedTxRequest(buffer_arg) {
  return bc_pb.GetMarkedTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetMarkedTxs(arg) {
  if (!(arg instanceof bc_pb.GetMarkedTxs)) {
    throw new Error('Expected argument of type bc.exchange.GetMarkedTxs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetMarkedTxs(buffer_arg) {
  return bc_pb.GetMarkedTxs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetMatchedOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetMatchedOrdersResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetMatchedOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetMatchedOrdersResponse(buffer_arg) {
  return bc_pb.GetMatchedOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetNrgSupplyResponse(arg) {
  if (!(arg instanceof bc_pb.GetNrgSupplyResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetNrgSupplyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetNrgSupplyResponse(buffer_arg) {
  return bc_pb.GetNrgSupplyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetOpenOrdersResponse(arg) {
  if (!(arg instanceof bc_pb.GetOpenOrdersResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetOpenOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetOpenOrdersResponse(buffer_arg) {
  return bc_pb.GetOpenOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetOutPointRequest(arg) {
  if (!(arg instanceof bc_pb.GetOutPointRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetOutPointRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetOutPointRequest(buffer_arg) {
  return bc_pb.GetOutPointRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetOutPointStatusResponse(arg) {
  if (!(arg instanceof bc_pb.GetOutPointStatusResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetOutPointStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetOutPointStatusResponse(buffer_arg) {
  return bc_pb.GetOutPointStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetRawMempoolResponse(arg) {
  if (!(arg instanceof bc_pb.GetRawMempoolResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetRawMempoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetRawMempoolResponse(buffer_arg) {
  return bc_pb.GetRawMempoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetRoveredBlockHashRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlockHashRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetRoveredBlockHashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetRoveredBlockHashRequest(buffer_arg) {
  return bc_pb.GetRoveredBlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetRoveredBlockHeightRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlockHeightRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetRoveredBlockHeightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetRoveredBlockHeightRequest(buffer_arg) {
  return bc_pb.GetRoveredBlockHeightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetRoveredBlocksRequest(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlocksRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetRoveredBlocksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetRoveredBlocksRequest(buffer_arg) {
  return bc_pb.GetRoveredBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetRoveredBlocksResponse(arg) {
  if (!(arg instanceof bc_pb.GetRoveredBlocksResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetRoveredBlocksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetRoveredBlocksResponse(buffer_arg) {
  return bc_pb.GetRoveredBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetSpendableCollateralRequest(arg) {
  if (!(arg instanceof bc_pb.GetSpendableCollateralRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetSpendableCollateralRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetSpendableCollateralRequest(buffer_arg) {
  return bc_pb.GetSpendableCollateralRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetSpendableCollateralResponse(arg) {
  if (!(arg instanceof bc_pb.GetSpendableCollateralResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetSpendableCollateralResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetSpendableCollateralResponse(buffer_arg) {
  return bc_pb.GetSpendableCollateralResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetTradeStatusResponse(arg) {
  if (!(arg instanceof bc_pb.GetTradeStatusResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetTradeStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetTradeStatusResponse(buffer_arg) {
  return bc_pb.GetTradeStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetTxRequest(arg) {
  if (!(arg instanceof bc_pb.GetTxRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetTxRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetTxRequest(buffer_arg) {
  return bc_pb.GetTxRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetUnlockTakerTxParamsRequest(arg) {
  if (!(arg instanceof bc_pb.GetUnlockTakerTxParamsRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetUnlockTakerTxParamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetUnlockTakerTxParamsRequest(buffer_arg) {
  return bc_pb.GetUnlockTakerTxParamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetUnlockTakerTxParamsResponse(arg) {
  if (!(arg instanceof bc_pb.GetUnlockTakerTxParamsResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetUnlockTakerTxParamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetUnlockTakerTxParamsResponse(buffer_arg) {
  return bc_pb.GetUnlockTakerTxParamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetUtxoLengthRequest(arg) {
  if (!(arg instanceof bc_pb.GetUtxoLengthRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetUtxoLengthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetUtxoLengthRequest(buffer_arg) {
  return bc_pb.GetUtxoLengthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetUtxoLengthResponse(arg) {
  if (!(arg instanceof bc_pb.GetUtxoLengthResponse)) {
    throw new Error('Expected argument of type bc.exchange.GetUtxoLengthResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetUtxoLengthResponse(buffer_arg) {
  return bc_pb.GetUtxoLengthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_GetUtxosRequest(arg) {
  if (!(arg instanceof bc_pb.GetUtxosRequest)) {
    throw new Error('Expected argument of type bc.exchange.GetUtxosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_GetUtxosRequest(buffer_arg) {
  return bc_pb.GetUtxosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_HelpResponse(arg) {
  if (!(arg instanceof bc_pb.HelpResponse)) {
    throw new Error('Expected argument of type bc.exchange.HelpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_HelpResponse(buffer_arg) {
  return bc_pb.HelpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_RpcFeedTransaction(arg) {
  if (!(arg instanceof bc_pb.RpcFeedTransaction)) {
    throw new Error('Expected argument of type bc.exchange.RpcFeedTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_RpcFeedTransaction(buffer_arg) {
  return bc_pb.RpcFeedTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_RpcTransaction(arg) {
  if (!(arg instanceof bc_pb.RpcTransaction)) {
    throw new Error('Expected argument of type bc.exchange.RpcTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_RpcTransaction(buffer_arg) {
  return bc_pb.RpcTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_RpcTransactionResponse(arg) {
  if (!(arg instanceof bc_pb.RpcTransactionResponse)) {
    throw new Error('Expected argument of type bc.exchange.RpcTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_RpcTransactionResponse(buffer_arg) {
  return bc_pb.RpcTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_RpcUpdateFeedTransaction(arg) {
  if (!(arg instanceof bc_pb.RpcUpdateFeedTransaction)) {
    throw new Error('Expected argument of type bc.exchange.RpcUpdateFeedTransaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_RpcUpdateFeedTransaction(buffer_arg) {
  return bc_pb.RpcUpdateFeedTransaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_SettingsResponse(arg) {
  if (!(arg instanceof bc_pb.SettingsResponse)) {
    throw new Error('Expected argument of type bc.exchange.SettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_SettingsResponse(buffer_arg) {
  return bc_pb.SettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_StatsResponse(arg) {
  if (!(arg instanceof bc_pb.StatsResponse)) {
    throw new Error('Expected argument of type bc.exchange.StatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_StatsResponse(buffer_arg) {
  return bc_pb.StatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_SyncStatus(arg) {
  if (!(arg instanceof bc_pb.SyncStatus)) {
    throw new Error('Expected argument of type bc.exchange.SyncStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_SyncStatus(buffer_arg) {
  return bc_pb.SyncStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_TransferRequest(arg) {
  if (!(arg instanceof bc_pb.TransferRequest)) {
    throw new Error('Expected argument of type bc.exchange.TransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_TransferRequest(buffer_arg) {
  return bc_pb.TransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_TransferResponse(arg) {
  if (!(arg instanceof bc_pb.TransferResponse)) {
    throw new Error('Expected argument of type bc.exchange.TransferResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_TransferResponse(buffer_arg) {
  return bc_pb.TransferResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_VanityConvertRequest(arg) {
  if (!(arg instanceof bc_pb.VanityConvertRequest)) {
    throw new Error('Expected argument of type bc.exchange.VanityConvertRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_VanityConvertRequest(buffer_arg) {
  return bc_pb.VanityConvertRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bc_exchange_VanityConvertResponse(arg) {
  if (!(arg instanceof bc_pb.VanityConvertResponse)) {
    throw new Error('Expected argument of type bc.exchange.VanityConvertResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bc_exchange_VanityConvertResponse(buffer_arg) {
  return bc_pb.VanityConvertResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BcService = exports.BcService = {
  getRoveredBlockHash: {
    path: '/bc.exchange.Bc/GetRoveredBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlockHashRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_exchange_GetRoveredBlockHashRequest,
    requestDeserialize: deserialize_bc_exchange_GetRoveredBlockHashRequest,
    responseSerialize: serialize_bc_core_Block,
    responseDeserialize: deserialize_bc_core_Block,
  },
  getRoveredBlockHeight: {
    path: '/bc.exchange.Bc/GetRoveredBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlockHeightRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_exchange_GetRoveredBlockHeightRequest,
    requestDeserialize: deserialize_bc_exchange_GetRoveredBlockHeightRequest,
    responseSerialize: serialize_bc_core_Block,
    responseDeserialize: deserialize_bc_core_Block,
  },
  getRoveredBlocks: {
    path: '/bc.exchange.Bc/GetRoveredBlocks',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetRoveredBlocksRequest,
    responseType: bc_pb.GetRoveredBlocksResponse,
    requestSerialize: serialize_bc_exchange_GetRoveredBlocksRequest,
    requestDeserialize: deserialize_bc_exchange_GetRoveredBlocksRequest,
    responseSerialize: serialize_bc_exchange_GetRoveredBlocksResponse,
    responseDeserialize: deserialize_bc_exchange_GetRoveredBlocksResponse,
  },
  getLatestRoveredBlocks: {
    path: '/bc.exchange.Bc/GetLatestRoveredBlocks',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetRoveredBlocksResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_GetRoveredBlocksResponse,
    responseDeserialize: deserialize_bc_exchange_GetRoveredBlocksResponse,
  },
  getNrgSupply: {
    path: '/bc.exchange.Bc/GetNrgSupply',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetNrgSupplyResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_GetNrgSupplyResponse,
    responseDeserialize: deserialize_bc_exchange_GetNrgSupplyResponse,
  },
  getBlockHash: {
    path: '/bc.exchange.Bc/GetBlockHash',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHashRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_exchange_GetBlockHashRequest,
    requestDeserialize: deserialize_bc_exchange_GetBlockHashRequest,
    responseSerialize: serialize_bc_core_BcBlock,
    responseDeserialize: deserialize_bc_core_BcBlock,
  },
  getBlockHeight: {
    path: '/bc.exchange.Bc/GetBlockHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHeightRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_exchange_GetBlockHeightRequest,
    requestDeserialize: deserialize_bc_exchange_GetBlockHeightRequest,
    responseSerialize: serialize_bc_core_BcBlock,
    responseDeserialize: deserialize_bc_core_BcBlock,
  },
  getBlocksHeight: {
    path: '/bc.exchange.Bc/GetBlocksHeight',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlockHeightRequest,
    responseType: bc_pb.GetBlocksResponse,
    requestSerialize: serialize_bc_exchange_GetBlockHeightRequest,
    requestDeserialize: deserialize_bc_exchange_GetBlockHeightRequest,
    responseSerialize: serialize_bc_exchange_GetBlocksResponse,
    responseDeserialize: deserialize_bc_exchange_GetBlocksResponse,
  },
  getBlocks: {
    path: '/bc.exchange.Bc/GetBlocks',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlocksRequest,
    responseType: bc_pb.GetBlocksResponse,
    requestSerialize: serialize_bc_exchange_GetBlocksRequest,
    requestDeserialize: deserialize_bc_exchange_GetBlocksRequest,
    responseSerialize: serialize_bc_exchange_GetBlocksResponse,
    responseDeserialize: deserialize_bc_exchange_GetBlocksResponse,
  },
  getLatestBlock: {
    path: '/bc.exchange.Bc/GetLatestBlock',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_core_BcBlock,
    responseDeserialize: deserialize_bc_core_BcBlock,
  },
  getLatestUTXOBlock: {
    path: '/bc.exchange.Bc/GetLatestUTXOBlock',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_core_BcBlock,
    responseDeserialize: deserialize_bc_core_BcBlock,
  },
  getTx: {
    path: '/bc.exchange.Bc/GetTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetTxRequest,
    responseType: core_pb.Transaction,
    requestSerialize: serialize_bc_exchange_GetTxRequest,
    requestDeserialize: deserialize_bc_exchange_GetTxRequest,
    responseSerialize: serialize_bc_core_Transaction,
    responseDeserialize: deserialize_bc_core_Transaction,
  },
  getMarkedTx: {
    path: '/bc.exchange.Bc/GetMarkedTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetMarkedTxRequest,
    responseType: core_pb.MarkedTransaction,
    requestSerialize: serialize_bc_exchange_GetMarkedTxRequest,
    requestDeserialize: deserialize_bc_exchange_GetMarkedTxRequest,
    responseSerialize: serialize_bc_core_MarkedTransaction,
    responseDeserialize: deserialize_bc_core_MarkedTransaction,
  },
  getMarkedTxsForMatchedOrder: {
    path: '/bc.exchange.Bc/GetMarkedTxsForMatchedOrder',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetMarkedTxs,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetMarkedTxs,
    responseDeserialize: deserialize_bc_exchange_GetMarkedTxs,
  },
  getTradeStatus: {
    path: '/bc.exchange.Bc/GetTradeStatus',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetTradeStatusResponse,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetTradeStatusResponse,
    responseDeserialize: deserialize_bc_exchange_GetTradeStatusResponse,
  },
  getOutpointStatus: {
    path: '/bc.exchange.Bc/GetOutpointStatus',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetOutPointStatusResponse,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetOutPointStatusResponse,
    responseDeserialize: deserialize_bc_exchange_GetOutPointStatusResponse,
  },
  getTxClaimedBy: {
    path: '/bc.exchange.Bc/GetTxClaimedBy',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: core_pb.Transaction,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_core_Transaction,
    responseDeserialize: deserialize_bc_core_Transaction,
  },
  getRawMempool: {
    path: '/bc.exchange.Bc/GetRawMempool',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetRawMempoolResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_GetRawMempoolResponse,
    responseDeserialize: deserialize_bc_exchange_GetRawMempoolResponse,
  },
  getBlockByTx: {
    path: '/bc.exchange.Bc/GetBlockByTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetTxRequest,
    responseType: core_pb.BcBlock,
    requestSerialize: serialize_bc_exchange_GetTxRequest,
    requestDeserialize: deserialize_bc_exchange_GetTxRequest,
    responseSerialize: serialize_bc_core_BcBlock,
    responseDeserialize: deserialize_bc_core_BcBlock,
  },
  getRoveredBlockForMarkedTx: {
    path: '/bc.exchange.Bc/GetRoveredBlockForMarkedTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetMarkedTxRequest,
    responseType: core_pb.Block,
    requestSerialize: serialize_bc_exchange_GetMarkedTxRequest,
    requestDeserialize: deserialize_bc_exchange_GetMarkedTxRequest,
    responseSerialize: serialize_bc_core_Block,
    responseDeserialize: deserialize_bc_core_Block,
  },
  help: {
    path: '/bc.exchange.Bc/Help',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.HelpResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_HelpResponse,
    responseDeserialize: deserialize_bc_exchange_HelpResponse,
  },
  stats: {
    path: '/bc.exchange.Bc/Stats',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.StatsResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_StatsResponse,
    responseDeserialize: deserialize_bc_exchange_StatsResponse,
  },
  getSettings: {
    path: '/bc.exchange.Bc/GetSettings',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.SettingsResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_SettingsResponse,
    responseDeserialize: deserialize_bc_exchange_SettingsResponse,
  },
  newFeed: {
    path: '/bc.exchange.Bc/NewFeed',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.RpcFeedTransaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_exchange_RpcFeedTransaction,
    requestDeserialize: deserialize_bc_exchange_RpcFeedTransaction,
    responseSerialize: serialize_bc_exchange_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_exchange_RpcTransactionResponse,
  },
  updateFeed: {
    path: '/bc.exchange.Bc/UpdateFeed',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.RpcUpdateFeedTransaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_exchange_RpcUpdateFeedTransaction,
    requestDeserialize: deserialize_bc_exchange_RpcUpdateFeedTransaction,
    responseSerialize: serialize_bc_exchange_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_exchange_RpcTransactionResponse,
  },
  newTx: {
    path: '/bc.exchange.Bc/NewTx',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.RpcTransaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_exchange_RpcTransaction,
    requestDeserialize: deserialize_bc_exchange_RpcTransaction,
    responseSerialize: serialize_bc_exchange_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_exchange_RpcTransactionResponse,
  },
  sendTx: {
    path: '/bc.exchange.Bc/SendTx',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Transaction,
    responseType: bc_pb.RpcTransactionResponse,
    requestSerialize: serialize_bc_core_Transaction,
    requestDeserialize: deserialize_bc_core_Transaction,
    responseSerialize: serialize_bc_exchange_RpcTransactionResponse,
    responseDeserialize: deserialize_bc_exchange_RpcTransactionResponse,
  },
  getEmbBalance: {
    path: '/bc.exchange.Bc/GetEmbBalance',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: bc_pb.GetEmbBalanceResponse,
    requestSerialize: serialize_bc_exchange_GetBalanceRequest,
    requestDeserialize: deserialize_bc_exchange_GetBalanceRequest,
    responseSerialize: serialize_bc_exchange_GetEmbBalanceResponse,
    responseDeserialize: deserialize_bc_exchange_GetEmbBalanceResponse,
  },
  getBalance: {
    path: '/bc.exchange.Bc/GetBalance',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: bc_pb.GetBalanceResponse,
    requestSerialize: serialize_bc_exchange_GetBalanceRequest,
    requestDeserialize: deserialize_bc_exchange_GetBalanceRequest,
    responseSerialize: serialize_bc_exchange_GetBalanceResponse,
    responseDeserialize: deserialize_bc_exchange_GetBalanceResponse,
  },
  getWallet: {
    path: '/bc.exchange.Bc/GetWallet',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: core_pb.WalletData,
    requestSerialize: serialize_bc_exchange_GetBalanceRequest,
    requestDeserialize: deserialize_bc_exchange_GetBalanceRequest,
    responseSerialize: serialize_bc_core_WalletData,
    responseDeserialize: deserialize_bc_core_WalletData,
  },
  getSpendableOutpoints: {
    path: '/bc.exchange.Bc/GetSpendableOutpoints',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: core_pb.WalletData,
    requestSerialize: serialize_bc_exchange_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_exchange_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_core_WalletData,
    responseDeserialize: deserialize_bc_core_WalletData,
  },
  getSpendableCollateral: {
    path: '/bc.exchange.Bc/GetSpendableCollateral',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetSpendableCollateralResponse,
    requestSerialize: serialize_bc_exchange_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_exchange_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_exchange_GetSpendableCollateralResponse,
    responseDeserialize: deserialize_bc_exchange_GetSpendableCollateralResponse,
  },
  getUnlockTakerTxParams: {
    path: '/bc.exchange.Bc/GetUnlockTakerTxParams',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUnlockTakerTxParamsRequest,
    responseType: bc_pb.GetUnlockTakerTxParamsResponse,
    requestSerialize: serialize_bc_exchange_GetUnlockTakerTxParamsRequest,
    requestDeserialize: deserialize_bc_exchange_GetUnlockTakerTxParamsRequest,
    responseSerialize: serialize_bc_exchange_GetUnlockTakerTxParamsResponse,
    responseDeserialize: deserialize_bc_exchange_GetUnlockTakerTxParamsResponse,
  },
  getByteFeeMultiplier: {
    path: '/bc.exchange.Bc/GetByteFeeMultiplier',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.GetByteFeeResponse,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_GetByteFeeResponse,
    responseDeserialize: deserialize_bc_exchange_GetByteFeeResponse,
  },
  getTransfers: {
    path: '/bc.exchange.Bc/GetTransfers',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.TransferRequest,
    responseType: bc_pb.TransferResponse,
    requestSerialize: serialize_bc_exchange_TransferRequest,
    requestDeserialize: deserialize_bc_exchange_TransferRequest,
    responseSerialize: serialize_bc_exchange_TransferResponse,
    responseDeserialize: deserialize_bc_exchange_TransferResponse,
  },
  getOpenOrder: {
    path: '/bc.exchange.Bc/GetOpenOrder',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetOpenOrdersResponse,
  },
  getOpenCallbackOrder: {
    path: '/bc.exchange.Bc/GetOpenCallbackOrder',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetOpenOrdersResponse,
  },
  getMatchedOrder: {
    path: '/bc.exchange.Bc/GetMatchedOrder',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetOutPointRequest,
    responseType: bc_pb.GetMatchedOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetOutPointRequest,
    requestDeserialize: deserialize_bc_exchange_GetOutPointRequest,
    responseSerialize: serialize_bc_exchange_GetMatchedOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetMatchedOrdersResponse,
  },
  getOpenOrders: {
    path: '/bc.exchange.Bc/GetOpenOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_exchange_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_exchange_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetOpenOrdersResponse,
  },
  getMatchedOrders: {
    path: '/bc.exchange.Bc/GetMatchedOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetSpendableCollateralRequest,
    responseType: bc_pb.GetMatchedOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetSpendableCollateralRequest,
    requestDeserialize: deserialize_bc_exchange_GetSpendableCollateralRequest,
    responseSerialize: serialize_bc_exchange_GetMatchedOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetMatchedOrdersResponse,
  },
  getHistoricalOrders: {
    path: '/bc.exchange.Bc/GetHistoricalOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetHistoryRequest,
    responseType: bc_pb.GetHistoricalOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetHistoryRequest,
    requestDeserialize: deserialize_bc_exchange_GetHistoryRequest,
    responseSerialize: serialize_bc_exchange_GetHistoricalOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetHistoricalOrdersResponse,
  },
  getUnmatchedOrders: {
    path: '/bc.exchange.Bc/GetUnmatchedOrders',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBalanceRequest,
    responseType: bc_pb.GetOpenOrdersResponse,
    requestSerialize: serialize_bc_exchange_GetBalanceRequest,
    requestDeserialize: deserialize_bc_exchange_GetBalanceRequest,
    responseSerialize: serialize_bc_exchange_GetOpenOrdersResponse,
    responseDeserialize: deserialize_bc_exchange_GetOpenOrdersResponse,
  },
  getUtxos: {
    path: '/bc.exchange.Bc/GetUtxos',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUtxosRequest,
    responseType: core_pb.Utxos,
    requestSerialize: serialize_bc_exchange_GetUtxosRequest,
    requestDeserialize: deserialize_bc_exchange_GetUtxosRequest,
    responseSerialize: serialize_bc_core_Utxos,
    responseDeserialize: deserialize_bc_core_Utxos,
  },
  getUTXOLength: {
    path: '/bc.exchange.Bc/GetUTXOLength',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUtxoLengthRequest,
    responseType: bc_pb.GetUtxoLengthResponse,
    requestSerialize: serialize_bc_exchange_GetUtxoLengthRequest,
    requestDeserialize: deserialize_bc_exchange_GetUtxoLengthRequest,
    responseSerialize: serialize_bc_exchange_GetUtxoLengthResponse,
    responseDeserialize: deserialize_bc_exchange_GetUtxoLengthResponse,
  },
  getSTXOLength: {
    path: '/bc.exchange.Bc/GetSTXOLength',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetUtxoLengthRequest,
    responseType: bc_pb.GetUtxoLengthResponse,
    requestSerialize: serialize_bc_exchange_GetUtxoLengthRequest,
    requestDeserialize: deserialize_bc_exchange_GetUtxoLengthRequest,
    responseSerialize: serialize_bc_exchange_GetUtxoLengthResponse,
    responseDeserialize: deserialize_bc_exchange_GetUtxoLengthResponse,
  },
  getBlake2bl: {
    path: '/bc.exchange.Bc/GetBlake2bl',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.GetBlake2blRequest,
    responseType: bc_pb.GetBlake2blResponse,
    requestSerialize: serialize_bc_exchange_GetBlake2blRequest,
    requestDeserialize: deserialize_bc_exchange_GetBlake2blRequest,
    responseSerialize: serialize_bc_exchange_GetBlake2blResponse,
    responseDeserialize: deserialize_bc_exchange_GetBlake2blResponse,
  },
  getBcAddressViaVanity: {
    path: '/bc.exchange.Bc/GetBcAddressViaVanity',
    requestStream: false,
    responseStream: false,
    requestType: bc_pb.VanityConvertRequest,
    responseType: bc_pb.VanityConvertResponse,
    requestSerialize: serialize_bc_exchange_VanityConvertRequest,
    requestDeserialize: deserialize_bc_exchange_VanityConvertRequest,
    responseSerialize: serialize_bc_exchange_VanityConvertResponse,
    responseDeserialize: deserialize_bc_exchange_VanityConvertResponse,
  },
  getCurrentWork: {
    path: '/bc.exchange.Bc/GetCurrentWork',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.CurrentWork,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_CurrentWork,
    responseDeserialize: deserialize_bc_exchange_CurrentWork,
  },
  getSyncStatus: {
    path: '/bc.exchange.Bc/GetSyncStatus',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.SyncStatus,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_SyncStatus,
    responseDeserialize: deserialize_bc_exchange_SyncStatus,
  },
  getFastSyncStatus: {
    path: '/bc.exchange.Bc/GetFastSyncStatus',
    requestStream: false,
    responseStream: false,
    requestType: core_pb.Null,
    responseType: bc_pb.SyncStatus,
    requestSerialize: serialize_bc_core_Null,
    requestDeserialize: deserialize_bc_core_Null,
    responseSerialize: serialize_bc_exchange_SyncStatus,
    responseDeserialize: deserialize_bc_exchange_SyncStatus,
  },
};

exports.BcClient = grpc.makeGenericClientConstructor(BcService);
