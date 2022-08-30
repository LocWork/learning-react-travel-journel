import React from 'react';
import './journal.css';
import Title from '../title/Title';
import Card from '../card/Card';
import Data from '../../data';
const Journal = () => {
  const CardElement = Data.map((info) => {
    return <Card key={info.id} info={info} />;
  });
  return (
    <div className='journal'>
      <Title />
      <div className='cardConatiner'>{CardElement}</div>
    </div>
  );
};

export default Journal;
