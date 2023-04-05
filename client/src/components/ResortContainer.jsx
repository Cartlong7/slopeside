import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';

function ResortContainer() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    const fetchResorts = async () => {
      const response = await fetch('/api/weather');
      const data = await response.json();
      setResorts(data);
    };
    fetchResorts();
  }, []);

  console.log(resorts);

  const resortCards = resorts.map(resort => {
    // eslint-disable-next-line semi
    <ResortCard key={resort.id} resort={resort}/>
  });

  return (
    <div className='resort-container'>
      {resortCards}
    </div>
  );
}

export default ResortContainer;