# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Docs about publishing NPM package

## [0.3.1] - 2021-12-03

### Added

- Introduced a new rpc call (getBlocksByRoveredHash) that returns the Overline Blocks with respect to the child chain id and hash.

## [0.3.0] - 2021-11-03

### Changed

- Rename RpcFeedTransaction and RpcUpdateFeedTransaction (added -Request suffix)
- change data_type and data_length field types in RpcFeedTransactionRequest and RpcUpdateFeedTransactionRequest

## [0.2.0] - 2021-10-28

### Added

- bc.GetTakerForMaker RPC method

## [0.1.0] - 2021-10-28

### Added

- added javascript implementation

### Changed

### Removed

### Fixed

## [0.0.0]

### Added

- initial version

[Unreleased]: https://github.com/blockcollider/overline-proto/compare/v0.1.0...HEAD
