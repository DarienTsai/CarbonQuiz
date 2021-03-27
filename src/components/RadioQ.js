// Only one choice question

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioQ(props){

  let key = 1;
  let idx = 0;

  return(
    <FormControl component="fieldset">
      <RadioGroup aria-label="carbon-q" name="carbon-q" value={props.val} onChange={props.handle}>
        {props.data.choices.map( x => {return <FormControlLabel key={key++} value={(idx++).toString()} control={<Radio/>} label={x.text} />;})}
      </RadioGroup>
    </FormControl>
  );
}