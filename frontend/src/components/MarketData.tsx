import React, { useState, useEffect } from 'react';

const MarketData: React.FC = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // リアルタイムの市場データを取得するAPIを呼び出す
    fetch('https://api.example.com/market-data')
      .then(response => response.json())
      .then(data => setMarketData(data));
  }, []);

  return (
    <div>
      <h2>Market Data</h2>
      <ul>
        {marketData.map((data: any) => (
          <li key={data.symbol}>{data.symbol}: ${data.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketData;
