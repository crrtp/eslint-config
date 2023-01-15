# @crrtp/eslint-config

[ESLint](https://github.com/eslint/eslint)の設定ファイルです。私のプロジェクトではだいたい使われます。

## 適用方法

**GitHub Packagesの認証が済んだら**、パッケージマネージャーを使ってインストールします。

```console
$ pnpm i -D @crrtp/eslint-config
```

`.eslintrc.js`を以下の内容に書き換えます。

```js
module.exports = {
  extends: "@crrtp"
}
```

## JavaScript Standard Styleからの変更ルール

この設定ファイルは、[JavaScript Standard Style](https://github.com/standard/standard) (MIT)を元にしています。変更しているルールは以下の通りです。

| ルール | 変更前 (要約) | 変更後 | 理由 |
| --- | --- | --- | --- |
| curly | `["error", "multi-line"]` | `["error", "multi-or-nest"]`[^curly] | if文を使うときは改行したい！！ |
| indent | `["error", 2]` | `["error", "tab"]` | 私がタブ派だから。 |
| no-tabs | `"error"` | (インデントのタブを許可[^tabs]) | 同上 |
| no-unused-vars | `"error"` | (変数を無視するパターンを追加[^ignore]) | あると便利だから。 |
| quotes | `["error", "single"]` | `["error", "double"]` | 私がダブルクォート派だから。 |

[^curly]: 正確には `["error", "multi-or-nest", "consistent"]`
[^tabs]: `{ allowIndentationTabs: true }`
[^ignore]: `{ varsIgnorePattern: "^_[^_]?", argsIgnorePattern: "^_[^_]?", destructuredArrayIgnorePattern: "^_[^_]?" }`

## ライセンス

[MIT License](./LICENSE)
