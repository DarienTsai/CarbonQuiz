// Display a quiz event
import {useState} from 'react';
import RadioQ from './RadioQ';
import CheckQ from './CheckQ';

import Button from '@material-ui/core/Button';

export default function Question(props) {

  // Store responses
  const [res, setRes] = useState(0);

  // Map choices to their idx, used to access score on q submit
  let idx = 0;

  return (
    <div id="question">
      {/* icon */}
      <p className="question-text">{/* text */}</p>

      {props.radio ? <RadioQ handle={setRes} data=""/>:<CheckQ handle={setRes} data=""/>}

      <Button variant="contained" color="primary">{">>"}</Button>
      
    </div>
  )
}