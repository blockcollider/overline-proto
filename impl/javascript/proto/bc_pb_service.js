// package: bc.exchange
// file: bc.proto

var bc_pb = require("./bc_pb");
var core_pb = require("./core_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Bc = (function () {
  function Bc() {}
  Bc.serviceName = "bc.exchange.Bc";
  return Bc;
}());

Bc.GetFeaturedFeedMessages = {
  methodName: "GetFeaturedFeedMessages",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetFeedMessagesRequest,
  responseType: bc_pb.FeedMessages
};

Bc.GetSavedFeedMessages = {
  methodName: "GetSavedFeedMessages",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetFeedMessagesRequest,
  responseType: bc_pb.FeedMessages
};

Bc.GetEphemeralFeedMessages = {
  methodName: "GetEphemeralFeedMessages",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetFeedMessagesRequest,
  responseType: bc_pb.FeedMessages
};

Bc.GetRoveredBlockHash = {
  methodName: "GetRoveredBlockHash",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetRoveredBlockHashRequest,
  responseType: core_pb.Block
};

Bc.GetRoveredBlockHeight = {
  methodName: "GetRoveredBlockHeight",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetRoveredBlockHeightRequest,
  responseType: core_pb.Block
};

Bc.GetRoveredBlocks = {
  methodName: "GetRoveredBlocks",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetRoveredBlocksRequest,
  responseType: bc_pb.GetRoveredBlocksResponse
};

Bc.GetLatestRoveredBlocks = {
  methodName: "GetLatestRoveredBlocks",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.GetRoveredBlocksResponse
};

Bc.GetNrgSupply = {
  methodName: "GetNrgSupply",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.GetNrgSupplyResponse
};

Bc.GetBlockHash = {
  methodName: "GetBlockHash",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlockHashRequest,
  responseType: core_pb.BcBlock
};

Bc.GetBlockHeight = {
  methodName: "GetBlockHeight",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlockHeightRequest,
  responseType: core_pb.BcBlock
};

Bc.GetBlocksHeight = {
  methodName: "GetBlocksHeight",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlockHeightRequest,
  responseType: bc_pb.GetBlocksResponse
};

Bc.GetBlocks = {
  methodName: "GetBlocks",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlocksRequest,
  responseType: bc_pb.GetBlocksResponse
};

Bc.GetLatestBlock = {
  methodName: "GetLatestBlock",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: core_pb.BcBlock
};

Bc.GetLatestUTXOBlock = {
  methodName: "GetLatestUTXOBlock",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: core_pb.BcBlock
};

Bc.GetTx = {
  methodName: "GetTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetTxRequest,
  responseType: core_pb.Transaction
};

Bc.GetMarkedTx = {
  methodName: "GetMarkedTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetMarkedTxRequest,
  responseType: core_pb.MarkedTransaction
};

Bc.GetMarkedTxsForMatchedOrder = {
  methodName: "GetMarkedTxsForMatchedOrder",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetMarkedTxs
};

Bc.GetTradeStatus = {
  methodName: "GetTradeStatus",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetTradeStatusResponse
};

Bc.GetOutpointStatus = {
  methodName: "GetOutpointStatus",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetOutPointStatusResponse
};

Bc.GetTxClaimedBy = {
  methodName: "GetTxClaimedBy",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: core_pb.Transaction
};

Bc.GetRawMempool = {
  methodName: "GetRawMempool",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.GetRawMempoolResponse
};

Bc.GetBlockByTx = {
  methodName: "GetBlockByTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetTxRequest,
  responseType: core_pb.BcBlock
};

Bc.GetRoveredBlockForMarkedTx = {
  methodName: "GetRoveredBlockForMarkedTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetMarkedTxRequest,
  responseType: core_pb.Block
};

Bc.Help = {
  methodName: "Help",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.HelpResponse
};

Bc.Stats = {
  methodName: "Stats",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.StatsResponse
};

Bc.GetSettings = {
  methodName: "GetSettings",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.SettingsResponse
};

Bc.NewFeed = {
  methodName: "NewFeed",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.RpcFeedTransactionRequest,
  responseType: bc_pb.RpcTransactionResponse
};

Bc.UpdateFeed = {
  methodName: "UpdateFeed",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.RpcUpdateFeedTransactionRequest,
  responseType: bc_pb.RpcTransactionResponse
};

Bc.NewTx = {
  methodName: "NewTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.RpcTransaction,
  responseType: bc_pb.RpcTransactionResponse
};

Bc.SendTx = {
  methodName: "SendTx",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Transaction,
  responseType: bc_pb.RpcTransactionResponse
};

Bc.GetEmbBalance = {
  methodName: "GetEmbBalance",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBalanceRequest,
  responseType: bc_pb.GetEmbBalanceResponse
};

Bc.GetBalance = {
  methodName: "GetBalance",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBalanceRequest,
  responseType: bc_pb.GetBalanceResponse
};

Bc.GetWallet = {
  methodName: "GetWallet",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBalanceRequest,
  responseType: core_pb.WalletData
};

Bc.GetSpendableOutpoints = {
  methodName: "GetSpendableOutpoints",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetSpendableCollateralRequest,
  responseType: core_pb.WalletData
};

Bc.GetSpendableCollateral = {
  methodName: "GetSpendableCollateral",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetSpendableCollateralRequest,
  responseType: bc_pb.GetSpendableCollateralResponse
};

Bc.GetUnlockTakerTxParams = {
  methodName: "GetUnlockTakerTxParams",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetUnlockTakerTxParamsRequest,
  responseType: bc_pb.GetUnlockTakerTxParamsResponse
};

Bc.GetByteFeeMultiplier = {
  methodName: "GetByteFeeMultiplier",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.GetByteFeeResponse
};

Bc.GetTransfers = {
  methodName: "GetTransfers",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.TransferRequest,
  responseType: bc_pb.TransferResponse
};

Bc.GetTakerForMaker = {
  methodName: "GetTakerForMaker",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetOutPointRequest
};

Bc.GetOpenOrder = {
  methodName: "GetOpenOrder",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetOpenOrdersResponse
};

Bc.GetOpenCallbackOrder = {
  methodName: "GetOpenCallbackOrder",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetOpenOrdersResponse
};

Bc.GetMatchedOrder = {
  methodName: "GetMatchedOrder",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: bc_pb.GetMatchedOrdersResponse
};

Bc.GetOpenOrders = {
  methodName: "GetOpenOrders",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetSpendableCollateralRequest,
  responseType: bc_pb.GetOpenOrdersResponse
};

Bc.GetMatchedOrders = {
  methodName: "GetMatchedOrders",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetSpendableCollateralRequest,
  responseType: bc_pb.GetMatchedOrdersResponse
};

Bc.GetHistoricalOrders = {
  methodName: "GetHistoricalOrders",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetHistoryRequest,
  responseType: bc_pb.GetHistoricalOrdersResponse
};

Bc.GetUnmatchedOrders = {
  methodName: "GetUnmatchedOrders",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBalanceRequest,
  responseType: bc_pb.GetOpenOrdersResponse
};

Bc.GetOriginalMakerOrder = {
  methodName: "GetOriginalMakerOrder",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetOutPointRequest,
  responseType: core_pb.Transaction
};

Bc.GetUtxos = {
  methodName: "GetUtxos",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetUtxosRequest,
  responseType: core_pb.Utxos
};

Bc.GetUTXOLength = {
  methodName: "GetUTXOLength",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetUtxoLengthRequest,
  responseType: bc_pb.GetUtxoLengthResponse
};

Bc.GetSTXOLength = {
  methodName: "GetSTXOLength",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetUtxoLengthRequest,
  responseType: bc_pb.GetUtxoLengthResponse
};

Bc.GetBlocksByRoveredHash = {
  methodName: "GetBlocksByRoveredHash",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlocksByRoveredHashRequest,
  responseType: bc_pb.GetBlocksByRoveredHashResponse
};

Bc.GetBlake2bl = {
  methodName: "GetBlake2bl",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.GetBlake2blRequest,
  responseType: bc_pb.GetBlake2blResponse
};

Bc.GetBcAddressViaVanity = {
  methodName: "GetBcAddressViaVanity",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: bc_pb.VanityConvertRequest,
  responseType: bc_pb.VanityConvertResponse
};

Bc.GetCurrentWork = {
  methodName: "GetCurrentWork",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.CurrentWork
};

Bc.GetSyncStatus = {
  methodName: "GetSyncStatus",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.SyncStatus
};

Bc.GetFastSyncStatus = {
  methodName: "GetFastSyncStatus",
  service: Bc,
  requestStream: false,
  responseStream: false,
  requestType: core_pb.Null,
  responseType: bc_pb.SyncStatus
};

exports.Bc = Bc;

function BcClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BcClient.prototype.getFeaturedFeedMessages = function getFeaturedFeedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetFeaturedFeedMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSavedFeedMessages = function getSavedFeedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSavedFeedMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getEphemeralFeedMessages = function getEphemeralFeedMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetEphemeralFeedMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getRoveredBlockHash = function getRoveredBlockHash(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetRoveredBlockHash, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getRoveredBlockHeight = function getRoveredBlockHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetRoveredBlockHeight, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getRoveredBlocks = function getRoveredBlocks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetRoveredBlocks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getLatestRoveredBlocks = function getLatestRoveredBlocks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetLatestRoveredBlocks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getNrgSupply = function getNrgSupply(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetNrgSupply, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlockHash = function getBlockHash(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlockHash, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlockHeight = function getBlockHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlockHeight, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlocksHeight = function getBlocksHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlocksHeight, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlocks = function getBlocks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlocks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getLatestBlock = function getLatestBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetLatestBlock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getLatestUTXOBlock = function getLatestUTXOBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetLatestUTXOBlock, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getTx = function getTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getMarkedTx = function getMarkedTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetMarkedTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getMarkedTxsForMatchedOrder = function getMarkedTxsForMatchedOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetMarkedTxsForMatchedOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getTradeStatus = function getTradeStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetTradeStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getOutpointStatus = function getOutpointStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetOutpointStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getTxClaimedBy = function getTxClaimedBy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetTxClaimedBy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getRawMempool = function getRawMempool(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetRawMempool, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlockByTx = function getBlockByTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlockByTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getRoveredBlockForMarkedTx = function getRoveredBlockForMarkedTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetRoveredBlockForMarkedTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.help = function help(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.Help, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.stats = function stats(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.Stats, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSettings = function getSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSettings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.newFeed = function newFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.NewFeed, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.updateFeed = function updateFeed(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.UpdateFeed, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.newTx = function newTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.NewTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.sendTx = function sendTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.SendTx, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getEmbBalance = function getEmbBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetEmbBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBalance = function getBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getWallet = function getWallet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetWallet, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSpendableOutpoints = function getSpendableOutpoints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSpendableOutpoints, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSpendableCollateral = function getSpendableCollateral(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSpendableCollateral, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getUnlockTakerTxParams = function getUnlockTakerTxParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetUnlockTakerTxParams, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getByteFeeMultiplier = function getByteFeeMultiplier(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetByteFeeMultiplier, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getTransfers = function getTransfers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetTransfers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getTakerForMaker = function getTakerForMaker(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetTakerForMaker, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getOpenOrder = function getOpenOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetOpenOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getOpenCallbackOrder = function getOpenCallbackOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetOpenCallbackOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getMatchedOrder = function getMatchedOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetMatchedOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getOpenOrders = function getOpenOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetOpenOrders, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getMatchedOrders = function getMatchedOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetMatchedOrders, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getHistoricalOrders = function getHistoricalOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetHistoricalOrders, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getUnmatchedOrders = function getUnmatchedOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetUnmatchedOrders, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getOriginalMakerOrder = function getOriginalMakerOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetOriginalMakerOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getUtxos = function getUtxos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetUtxos, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getUTXOLength = function getUTXOLength(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetUTXOLength, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSTXOLength = function getSTXOLength(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSTXOLength, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlocksByRoveredHash = function getBlocksByRoveredHash(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlocksByRoveredHash, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBlake2bl = function getBlake2bl(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBlake2bl, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getBcAddressViaVanity = function getBcAddressViaVanity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetBcAddressViaVanity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getCurrentWork = function getCurrentWork(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetCurrentWork, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getSyncStatus = function getSyncStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetSyncStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BcClient.prototype.getFastSyncStatus = function getFastSyncStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Bc.GetFastSyncStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BcClient = BcClient;

