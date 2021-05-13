import React from 'react';

import '../styles/card.css';
import calendar from '../images/calendar2.svg'
import user from '../images/user3.svg'
import people from '../images/people.jpg'

export default function CardTwo() {
  const bull = <span className="bullet">•</span>;

  return (
    <div className="myCard row cardTwo">
      <div className="mainContent column">
        <p className="cardHeader">
          Big Single Line Company Title
        </p>
        <div className="container">
          {bull}
          <div className="containerIcon">
            <img src={calendar} className="icon"></img>
            <p className="textIcon">
              Apr 16, 2021 at 9.00am - Apr 14, 2024 at 6.00pm
            </p>
          </div>
          <div className="containerIcon">
            <img src={user} className="icon"></img>
            <p className="textIcon">
              Attending: 12 (Capacity 120)
            </p>
          </div>
        </div>
        <div className="addInfo">
          <p className="userName"> Talan Gouse </p>
          <p> December 18, 2020</p>
          {bull}
          <p>Audience </p>
        </div>
      </div>
      <div className="picBlock column">
        <img src={people} className="picPeople"></img>
      </div>
    </div>
  );
}