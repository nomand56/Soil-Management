import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import React, { lazy } from 'react'

const Land = ({m,setvalue}) => {

    const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
    const bg = useColorModeValue('rgb(250,250,250)', '#32995b');  


  return (
    <div
      style={{
        width: 'fit-content',
        borderRadius: '10px',
        boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <Box
        sx={{
          maxWidth: '220px',
          padding: '8px',
          height: '350px',
        }}
      >
        <img
          src={m.image}
          alt={m.image}
          // loading={lazy}
          style={{ width: '100%', height: '150px' }}
        />
        <Text
          fontSize='md'
          color='green'
          sx={{ fontWeight: 'bold', margin: '10px 0px' }}
        >
          {m.productType}
        </Text>
        <Text fontSize='sm' color={color} sx={{ height: '80px' }}>
          {m.description}
        </Text>
        <Button
          name='land'
          value={m.productType}
          onClick={setvalue}
          sx={{
            fontSize: '10px',
            width: '100%',
            margin: '10px 0px',
            color: 'white',
            backgroundColor: 'green.500',
            '&:hover': { background: '#00A300' },
          }}
          bg={bg}
        >{`Les Mer Om ${m.productType}`}</Button>
      </Box>
    </div>
  );
}

export default Land