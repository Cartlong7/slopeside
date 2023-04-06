import React, { useState, useEffect } from 'react';
import ResortCard from './ResortCard';
import Copper from './Copper';

function ResortContainer() {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => setConditions(data))
      .catch(error => console.log(error));
  }, []);

  // const handleAddResort = () => {
  //   // Make a fetch request to your server to get the data
  //   fetch('/api/weather')
  //     .then(res => res.json())
  //     .then(data => {
  //       // Update the resorts state with the fetched data
  //       setResorts([...resorts, data]);
  //     })
  //     .catch(error => console.log(error));
  // };

  console.log(conditions);

  const resortCards = conditions.map(resort => {
    return <ResortCard key={resort.id} resort={resort}/>;
  });

  if (!conditions) {
    return <p>Loading Resorts...</p>;
  }

  return (
    <div className='resort-container'>
      {resortCards}
      <Copper/>
      <button className='add-resort' onClick={console.log('please work')}>
        Add a resort
      </button>
    </div>
  );
}

export default ResortContainer;