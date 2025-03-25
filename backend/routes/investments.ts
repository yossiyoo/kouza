import { Router } from 'express';

const router = Router();

type Investment = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

let investments: Investment[] = [];

router.get('/', (req, res) => {
  res.json(investments);
});

router.post('/', (req, res) => {
  const newInvestment: Investment = req.body;
  newInvestment.id = investments.length + 1;
  investments.push(newInvestment);
  res.status(201).json(newInvestment);
});

export default router;
