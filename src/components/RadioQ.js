// Only one choice question
import {useState} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioQ(props){

  let key = 1;

  const [value, setValue] = useState(0);

  // Store user selection 
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <FormControl component="fieldset">
      <RadioGroup aria-label="carbon-q" name="carbon-q" value={value} onChange={handleChange}>

        {/*props.choices.map( x => {return 
          <FormControlLabel key={key++} value={idx++} control={<Radio />} label={x.text} />;})*/
        }

      </RadioGroup>
    </FormControl>
  );
}