/* global data */
import './App.css';
import Question from './components/Question';
import Landing from './components/Landing';
import Score from './components/Score';

// rendered for testing atm
function App() {
  return (
    <div className="App">
      {<Question data={data.story[0]}/>}
      {/*<Question />*/}
      {/* <Landing /> */}
      {/* <Score /> */}
    </div>
  );
}

export default App;
