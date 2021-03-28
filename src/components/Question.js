/* global data */

// Display a quiz event
import { useState, useEffect } from 'react';
import RadioQ from './RadioQ';
import CheckQ from './CheckQ';

import bg_noon from '../assets/bg-afternoon.png';
import bg_evening from '../assets/bg-evening.png';
import bg_morning from '../assets/bg-morning.png';

import Button from '@material-ui/core/Button';

export default function Question(props) {
  const [main_bg, setMainBg] = useState(bg_morning);

  // create initial q state
  let init = props.data.radio ? "0" : {};
  
  // Store responses
  const [res, setRes] = useState(init);

  useEffect(() => {
    const modulo = props.question % 3;
    if ((props.question === 0 || modulo === 1) && props.question !== data.story.length - 1) {
      setMainBg(bg_morning);
    } else if (modulo === 2) {
      setMainBg(bg_noon);
    } else {
      setMainBg(bg_evening);
    }
  }, [props.question, props.data])
  


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
    // Add choice impact to sum
    if(props.data.radio){

      // Add max question impact to total
      let max = 0;
      for(let i = 0; i < props.data.choices.length; i++){
         max = Math.max(props.data.choices[i].impact, max);
      }
      data.score[props.data.category].total += max;

      data.score[props.data.category].sum += props.data.choices[res].impact;
      if(props.data.choices[res].impact >= 3 && props.data.tip !== ''){
        data.score.tips.push(props.data.tip);
      }
    } else{

      // Add all question impacts to total
      for(let i = 0; i < props.data.choices.length; i++){
        data.score[props.data.category].total += props.data.choices[i].impact;
      }

      let sum = 0;
      for(let key in res){
        if (res[key]){
          for(let i = 0; i < props.data.choices.length; i++){

            if( props.data.choices[i].text === key ){
              sum += props.data.choices[i].impact;
            }
          }
        }
      }
      data.score[props.data.category].sum += sum;

      if(sum >= 3 && props.data.tip !== ''){
        data.score.tips.push(props.data.tip);
      }
    }

    // Transition to next Q here
    if (props.question + 1 < data.story.length) {
      props.setQuestion(props.question + 1);
    } else {
      data.nav = 2;
      props.setPage(2);
    }
  }

  // Map choices to their idx, used to access score on q submit
  return (
    <div className='outer-question-container' style={{
      backgroundImage: `url(${main_bg})`,
    }}>
      <div id="question">
        {/* icon */}
        <p className="question-text">
          {props.data.text}
        </p>

        {
          props.data.radio 
          ? 
          <RadioQ val={res} handle={handleChange} data={props.data}/>
          :
          <CheckQ val={res} handle={handleChange} data={props.data}/>
        }

        <Button className='next-button' onClick={handleNext} variant="contained" color="primary">
          {">>"}
        </Button>
        
      </div>
    </div>
  )
}