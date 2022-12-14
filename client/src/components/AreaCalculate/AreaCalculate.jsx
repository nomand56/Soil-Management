import { Box, Button, Input, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function AreaCalculate({ calculateArea ,callNext}) {
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <Text color={color} fontSize='xl' sx={{ margin: '20px 0px' }}>
        Velg Landområde
      </Text>
      <Input
        name='Landomrade'
        type='number'
        placeholder='Angi området i kvadratmeter'
        onChange={calculateArea}
        style={{width:"50%"}}

/>
      <Text color={color} fontSize='xl' sx={{ margin: '20px 0px' }}>
        Velg Jordhøyde
      </Text>
      <Input
        name='Jordhoyde'
        type='number'
        placeholder='Angi bakkehøyde i meter'
        onChange={calculateArea} 
        style={{width:"50%"}}
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
          onClick={callNext}
          sx={{ '&:hover': { background: '#00A300' } }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}
