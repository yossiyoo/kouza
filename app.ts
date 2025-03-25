import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

type Investment = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

let investments: Investment[] = [];

app.get('/investments', (req, res) => {
  res.json(investments);
});

app.post('/investments', (req, res) => {
  const newInvestment: Investment = req.body;
  newInvestment.id = investments.length + 1;
  investments.push(newInvestment);
  res.status(201).json(newInvestment);
});

app.listen(port, () => {
  console.log(`Investment app listening at http://localhost:${port}`);
});
