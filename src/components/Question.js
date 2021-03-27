// Display a quiz event
import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Question(props) {

  // Hook for question selection
  let init;
  if (props.radio){
    init = 0;
  } else{
    init = {};
    for( let i = 0; i < props.choices.length; i++){
      init[i] = false;
    }
  }

  const [value, setValue] = React.useState(0);

  // Store user selection 
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Map choices to their idx, used to access score on q submit
  let idx = 0;

  return (
    <div id="question">
      {/* icon */}
      <p className="question-text">{/* text */}</p>

      <FormControl component="fieldset">
        <RadioGroup aria-label="carbon-q" name="carbon-q" value={value} onChange={handleChange}>

          {/*props.map( x => {return <FormControlLabel value={idx++} control={<Radio />} label={x.text} />;})*/}

        </RadioGroup>
      </FormControl>
      
    </div>
  );
  
}