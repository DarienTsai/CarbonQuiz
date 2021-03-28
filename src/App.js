/* global data */
import './App.css';
import Question from './components/Question';
import Landing from './components/Landing';
import Score from './components/Score';
import { useState } from 'react';


// rendered for testing atm
function App() {
  const [, setPage] = useState(0);
  const [question, setQuestion] = useState(0);

  return (
    <div className="App">
      {
        data.nav === 0 &&
        <Landing setPage={setPage} />
      }
      {
        data.nav === 1 &&
        <Question 
          data={data.story[question]} 
          question={question}
          setQuestion={setQuestion} 
          setPage={setPage}
        />
      }
      {
        data.nav === 2 &&
        <Score />
      }
      {/* {<Question data={data.story[0]}/>} */}
    </div>
  );
}

export default App;
