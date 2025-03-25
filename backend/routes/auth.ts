import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  // ユーザー認証処理
  res.send('ログイン成功');
});

router.post('/register', (req, res) => {
  // ユーザー登録処理
  res.send('登録成功');
});

export default router;
