import React from 'react';
import '../styles/ResortCard.css';

function ResortCard(props) {
  const { conditions } = props;
  console.log(conditions);
  return (
    // resort properties will have to be updated to reflect their organization in the card
    // create multiple divs to hold property data in sanctioned areas of the card
    <div className='resort-conditions'>
      <p>Anywhere, USA</p>
      <p>{conditions.temperature}</p>
      <h4>Current Conditions</h4>
    </div>
  );
} 

// function ResortCard(props) {
//   const { conditions } = props;
//   console.log(conditions);
//   return (
//     // resort properties will have to be updated to reflect their organization in the card
//     // create multiple divs to hold property data in sanctioned areas of the card
//     <div className='resort-conditions'>
//       <p>Anywhere, USA</p>
//       <p>{conditions.temperature}</p>
//       <h4>Current Conditions</h4>
//     </div>
//   );
// } 


export default ResortCard;