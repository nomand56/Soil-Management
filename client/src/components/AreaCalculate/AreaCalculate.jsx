import { Box, Button, Input, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function AreaCalculate({setvalue}) {
    const [value, setvalues] = useState(0)
    const [data,setdata]=useState({width:'',height:''})
     const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
    const bg = useColorModeValue('rgb(250,250,250)', '#32995b'); 
    const toast=useToast()
    function handleChange(e) {
     setdata({...data,[e.target.name]:e.target.value})   
    }
    function saveData()
    {
        let d=((+data.height)*(+data.width))
        setvalues(d)
    }
  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <Text color={color} fontSize='xl' sx={{ margin: '20px 0px' }}>
        Velg Landområde
      </Text>
      <Input
        name='width'
        type='number'
        placeholder='Angi området i kvadratmeter'
        onChange={handleChange}
      />
      <Text color={color} fontSize='xl' sx={{ margin: '20px 0px' }}>
        Velg Jordhøyde
      </Text>
      <Input
        name='height'
        type='number'
        placeholder='Angi bakkehøyde i meter'
        onChange={handleChange}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          margin: '20px 0px',
        }}
      >
        <Button
          bg={bg}
          color={color}
          sx={{ margin: '0px 20px' }}
          onClick={() => {
            saveData();
          }}
        >
          Save
        </Button>
        <Button
          bg={bg}
          name='quantity'
          color={color}
          value={value}
          onClick={(e) => {
            if (value === 0) {
              toast({
                position: 'top',
                description: 'vennligst lagre verdien først',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            } else {
              setvalue(e);
            }
          }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}
