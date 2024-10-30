# csv-line-numbering

CSVファイルの1列目に行数列を挿入させるパッケージです。

## インストール
```
npm install csv-line-numbering
```

## 実行コマンド
```
npx csv-line-numbering <CSVファイルパス>
```

## 実行例
CSVファイルパス：`data/customer_list.csv`
実行コマンド：`npx csv-line-numbering data/customer_list.csv`

### 実行前イメージ
```
会社名,拠点
A社,東京
B社,大阪
C社,福岡
D社,愛知
E社,北海道
```

### 実行後イメージ
```
行数,会社名,拠点
1,A社,東京
2,B社,大阪
3,C社,福岡
4,D社,愛知
5,E社,北海道
```
