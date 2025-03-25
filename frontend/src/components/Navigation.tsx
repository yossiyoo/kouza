import React from 'react';

type NavigationProps = {
  setPage: (page: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage('portfolio')}>Portfolio</button>
      <button onClick={() => setPage('marketData')}>Market Data</button>
      <button onClick={() => setPage('chart')}>Chart</button>
    </nav>
  );
};

export default Navigation;
