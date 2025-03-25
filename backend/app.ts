import express from 'express';
import bodyParser from 'body-parser';
import https from 'https';
import fs from 'fs';
import path from 'path';
import authRoutes from './routes/auth';
import investmentRoutes from './routes/investments';

const app = express();
const port = 3000;

// SSL証明書と秘密鍵の読み込み
const sslOptions = {
  key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem'))
};

app.use(bodyParser.json());

// ルートの設定
app.use('/auth', authRoutes);
app.use('/investments', investmentRoutes);

// HTTPSサーバーの作成
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Investment app listening at https://localhost:${port}`);
});
