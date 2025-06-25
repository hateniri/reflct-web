# Reflct 3DGS Viewer Integration Guide

このプロジェクトはReflct（https://www.reflct.app/）の3D Gaussian Splatting (3DGS)ビューアーを統合する準備ができています。

## 統合手順

### 1. Reflctアカウントの作成
1. https://www.reflct.app/ でアカウントを作成
2. APIキーを取得
3. 3Dシーンをアップロード（.plyまたは.ksplatファイル）

### 2. 設定の更新
`script.js`ファイルの以下の部分を更新してください：

```javascript
const REFLCT_CONFIG = {
    apiKey: 'YOUR_API_KEY_HERE', // 実際のAPIキーに置き換え
    defaultSceneId: 'demo-scene-id' // デフォルトのシーンIDに置き換え
};
```

### 3. シーンIDの設定
各コンテンツアイテムにReflctのシーンIDを設定します：

```javascript
reflctSceneIds: {
    "本館": "scene-id-1",      // 実際のシーンIDに置き換え
    "東洋館": "scene-id-2",    // 実際のシーンIDに置き換え
    "平成館": "scene-id-3"     // 実際のシーンIDに置き換え
}
```

## 統合オプション

### オプション1: Reactコンポーネント（推奨）
```bash
npm install @reflct/react
```

```jsx
import { Viewer } from '@reflct/react';

<Viewer 
    id={sceneId} 
    apikey={apiKey}
    style={{ width: '100%', height: '100%' }}
/>
```

### オプション2: iFrame埋め込み
```html
<iframe 
    src="https://app.reflct.app/viewer/YOUR_SCENE_ID?key=YOUR_API_KEY"
    width="100%"
    height="100%"
    frameborder="0"
    allowfullscreen
></iframe>
```

### オプション3: JavaScript SDK
詳細は https://docs.reflct.app を参照してください。

## 現在の実装

現在、`detail-viewer.js`には以下が実装されています：
- 空間選択機能
- シーンID管理
- Reflct統合のプレースホルダー
- 統合コード例の表示

## カスタマイズ

### ビューアーのスタイル
`detail.html`の`.detail-player`クラスでビューアーのサイズや見た目を調整できます。

### 複数シーンの管理
各コンテンツは複数の「空間」（シーン）を持つことができ、ユーザーは空間選択ボタンで切り替えられます。

## トラブルシューティング

- **シーンが表示されない**: APIキーとシーンIDが正しいか確認
- **CORS エラー**: Reflctダッシュボードでドメインを許可リストに追加
- **パフォーマンス**: 大きな3Dシーンは初回ロードに時間がかかる場合があります

## サポート

- Reflct公式ドキュメント: https://docs.reflct.app
- Reflct Discord: コミュニティサポート
- UPHASH サポート: contact@uphash.co