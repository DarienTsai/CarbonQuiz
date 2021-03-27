/* global data */

// Display a quiz event
import {useState} from 'react';
import RadioQ from './RadioQ';
import CheckQ from './CheckQ';

import Button from '@material-ui/core/Button';

export default function Question(props) {

  // create initial q state
  let init = props.data.radio ? "0" : {};

  // Store responses
  const [res, setRes] = useState(init);

  // Handle response
  const handleChange = (event) => {
    if(props.data.radio){
      setRes(event.target.value);
    } else{
      setRes({ ...res, [event.target.name]: event.target.checked });
    }
  };

  // Question submission
  const handleNext = () => {

    // console.log("start", data.score);

    // Add choice impact to sum
    if(props.data.radio){

      // Add max question impact to total
      let max = 0;
      for(let i = 0; i < props.data.choices.length; i++){
         max = Math.max(props.data.choices[i].impact, max);
      }
      data.score[props.data.category].total += max;

      data.score[props.data.category].sum += props.data.choices[res].impact;
    } else{

      // Add all question impacts to total
      for(let i = 0; i < props.data.choices.length; i++){
        data.score[props.data.category].total += props.data.choices[i].impact;
      }

      for(let key in res){
        if (res[key]){
          for(let i = 0; i < props.data.choices.length; i++){

            if( props.data.choices[i].text == key ){
              data.score[props.data.category].sum += props.data.choices[i].impact;
            }
          }
        }
      }
    }
    // console.log("end", data.score);


    // Transition to next Q here

  }

  // Map choices to their idx, used to access score on q submit
  return (
    <div id="question">
      {/* icon */}
      <p className="question-text">{props.data.text}</p>

      {props.data.radio ? <RadioQ val={res} handle={handleChange} data={props.data}/>:<CheckQ val={res} handle={handleChange} data={props.data}/>}

      <Button onClick={handleNext} variant="contained" color="primary">{">>"}</Button>
      
    </div>
  )
}