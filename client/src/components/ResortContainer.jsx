import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';
import Copper from './Copper';

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

  // useEffect(() => {
  //   fetch('/api/weather')
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  const handleAddResort = () => {
    // Make a fetch request to your server to get the data
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => {
        // Update the resorts state with the fetched data
        setResorts([...resorts, data]);
      })
      .catch(error => console.log(error));
  };

  console.log(resorts);

  const resortCards = resorts.map(resort => {
    return <ResortCard key={resort.id} resort={resort}/>;
  });

  console.log('did map');

  return (
    <div className='resort-container'>
      {resortCards}
      <Copper/>
      <button className='add-resort' onClick={handleAddResort}>
        Add a resort
      </button>
    </div>
  );
}

export default ResortContainer;