import React, { useState,useEffect } from 'react'
import {Radio, RadioGroup, Stack} from "@chakra-ui/react"
import {useCartContext} from "../../context/cart_context"


function CartDelivery() {
  const {deliveryOption,delivery } = useCartContext()
  const [value, setValue] = useState('1')
const handleChange = (e) => {
deliveryOption(e)

}
    return (
    <RadioGroup onChange={handleChange} value={delivery} >
      <Stack direction='column'>
        <Radio value='express'>Expresss (Delivery in 2-3 days)</Radio>
        <Radio value='standard'>Standard (Delivery in 1-week)</Radio>
        <Radio value='ordinary'>Ordinary (Delivery in 2-weeks)</Radio>
        <Radio value='pickUp'>PickUp</Radio>
      </Stack>
    </RadioGroup>
  )
  

}

export default CartDelivery