// Check all that applies question

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckQ(props) {

  // Construct initial obj
  let key = -1;

  // Display the check question
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup>
          {props.data.choices.map(x => {return <FormControlLabel key={key--}
            control={<Checkbox onChange={props.handle} name={x.text} />}
            label={x.text}
            />
          })}
        </FormGroup>
      </FormControl>
      
    </div>
  );
}