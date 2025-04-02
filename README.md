# magrinfo

## 目的

magrinfoは従来から各業界で課題となっているGISデータの管理を行うためのツールである。大きく分けて以下の機能を提供する。

- Auth: 認証基盤、Auth0を利用
- Store: データストア、S3互換APIを持つObject Storageを使用、直近はCloudflare R2をターゲットとする
- Viewer: データ可視化ツール、Kepler.gl + DuckDB-wasmを使用

