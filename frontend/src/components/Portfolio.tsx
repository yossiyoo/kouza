import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000/investments')
      .then(response => response.json())
      .then(data => setInvestments(data));
  }, []);

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {investments.map((investment: any) => (
          <li key={investment.id}>{investment.name}: ${investment.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
