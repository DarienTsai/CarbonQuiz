/* global data */
import React from 'react';
import logo from '../assets/logo.png';

export default function Landing(props) {

  const {
    setPage,
  } = props;

  const handlePlay = () => {
    // morning events: 2
    let morningCopy = [...data.morning]; // deep-copies
    let afternoonCopy = [...data.afternoon];
    let eveningCopy = [...data.evening];

    const addDay = () => {
      let morningEvent1 = Math.floor(Math.random() * morningCopy.length);
      data.story.push(morningCopy[morningEvent1]);
      morningCopy.splice(morningEvent1, 1);
      
      let afternoonEvent1 = Math.floor(Math.random() * afternoonCopy.length);
      data.story.push(afternoonCopy[afternoonEvent1]);
      afternoonCopy.splice(afternoonEvent1, 1);
  
      let eveningEvent1 = Math.floor(Math.random() * eveningCopy.length);
      data.story.push(eveningCopy[eveningEvent1]);
      eveningCopy.splice(eveningEvent1, 1);
    }

    // DAYS
    addDay();
    addDay();
    data.story.push(data.end[0]);

    console.log(data.story)
    
    data.nav = 1;
    setPage(1);
  }

  return (
    <div className='landing-container'>
      <img className='logo' alt='logo' width={200} height={200} src={logo} />
      <div className='main-body'>
        <p onClick={handlePlay} className='p play-button'>
          Play
        </p>
        <p className='main-text p'>
          Carbon Quiz is a personality test for your Carbon Footprint.
          As you go about your day in this quiz, select the choices
          that you would most likely make.
        </p>
        <p className='main-text p'>
          At the end of your day, you'll get a relative estimate on 
          your lifestyle's CO<sub>2</sub> emissions, as well as some
          suggestions on how you can reduce your carbon footprint.
        </p>
        <p className='main-text p'>
          Events are randomly generated! Your experience and scores will
          be different each time!
        </p>
      </div>
      <footer className='footer'>
        Submitted as a project for Hoohacks 2021
      </footer>
    </div>
  );
}