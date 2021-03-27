/* global data */
import './App.css';
import Question from './components/Question';

// rendered for testing atm
function App() {
  return (
    <div className="App">
      {<Question data={data.story[0]}/>}
    </div>
  );
}

export default App;
