import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import MarketData from './components/MarketData';
import Chart from './components/Chart';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [page, setPage] = useState('portfolio');

  return (
    <div>
      <h1>Investment App</h1>
      <Navigation setPage={setPage} />
      {page === 'portfolio' && <Portfolio />}
      {page === 'marketData' && <MarketData />}
      {page === 'chart' && <Chart />}
    </div>
  );
};

export default App;
