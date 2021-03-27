import React from 'react';

export default function Landing() {
  return (
    <div className='landing-container'>
      <img className='logo' alt='logo' width={200} height={200} src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsweetclipart.com%2Fmultisite%2Fsweetclipart%2Ffiles%2Fff0000%2520Color%2520Square%2520RGB%2520Red.png&f=1&nofb=1' />
      <div className='main-body'>
        <p className='p play-button'>
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