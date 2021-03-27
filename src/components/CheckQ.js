// Check all that applies question

import {useState} from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckQ(props) {

  // Construct initial obj
  let key = -1;

  // Init state
  const [state, setState] = useState({

  });

  // Update checked options
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Display the check question
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup>
          {props.choices.map(x => {return 
            <FormControlLabel key={key--}
            control={<Checkbox onChange={handleChange} name={text.text} />}
            label={x.text}
            />
          })}
        </FormGroup>
      </FormControl>
      
    </div>
  );
}