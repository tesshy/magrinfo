# store

- Cloudflare Workersで動作する、React Router v7を利用したストレージアプリケーション
- Cloudflare R2をObject Storageとして利用する
- 認証はAuth0を利用し、ユーザー毎に階層を分ける
    - Backet Nameはmagrinfo-store
    - ユーザーはAuth0から提供されるUIDを利用する 

