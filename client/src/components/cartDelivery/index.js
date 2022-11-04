import React, { useState,useEffect } from 'react'
import {Radio, RadioGroup, Stack} from "@chakra-ui/react"
import {useCartContext} from "../../context/cart_context"


function CartDelivery() {
  const {deliveryOption } = useCartContext()
  const [value, setValue] = useState('1')
const handleChange = (e) => {
deliveryOption(e)

}
    return (
    <RadioGroup onChange={handleChange} >
      <Stack direction='column'>
        <Radio value='express'>Delivery in two days</Radio>
        <Radio value='standard'>Delivery in one week</Radio>
        <Radio value='ordinary'>Delivery in two weeks</Radio>
        <Radio value='pickUp'>PickUp</Radio>
      </Stack>
    </RadioGroup>
  )
  

}

export default CartDelivery