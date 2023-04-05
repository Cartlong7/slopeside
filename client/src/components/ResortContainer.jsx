import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';

function ResortContainer() {
  const [resorts, setResorts] = useState([]);

  // useEffect(() => {
  //   const fetchResorts = async () => {
  //     const response = await fetch('/api/weather');
  //     const data = await response.json();
  //     setResorts(data);
  //   };
  //   fetchResorts();
  // }, []);

  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setResorts(data));
    console.log('hello there');
  }, []);

  console.log(resorts);

  const resortCards = resorts.map(resort => (
    // eslint-disable-next-line semi
    <ResortCard key={resort.id} resort={resort}/>
  ));

  console.log('did map');

  return (
    <div className='resort-container'>
      {resortCards}
      <p>WHY CANT I RENDER ANYTHING</p>
    </div>
  );
}

export default ResortContainer;