import React from 'react'
import {Paper, Typography, Grid, Button} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useCartContext} from '../../context/cart_context'
function CartDelivery() {
    const [value, setValue] = React.useState()
  const { deliveryOption} = useCartContext()
    const handleChange = (event) => {
        setValue(event.target.value);
        deliveryOption(event.target.value)
    };
    console.log(value)
  return (
    <div>
      <Paper>
      <FormControl onChange={handleChange}>
      <FormLabel id="demo-radio-buttons-group-label" >Delivery Method</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="express" control={<Radio />}  label="Delivery Tomorrow" />
        <FormControlLabel value="standard" control={<Radio />} label="Delivery in 3-5 days" />
        <FormControlLabel value="ordinary" control={<Radio />} label="Delivery in next week" />
        <FormControlLabel value="pickUp" control={<Radio />} label="Self Pick up" />
      </RadioGroup>
    </FormControl>
        
        
        
        </Paper></div>
  )
}

export default CartDelivery