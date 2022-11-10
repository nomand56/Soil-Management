import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const FilterDetailCard = ({ data }) => {
     const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
     const bg = useColorModeValue('rgb(250,250,250)', '#32995b');  

  return (
    <Box
      sx={{
        color: 'white',
        padding: '20px 30px',
        borderRadius: '20px',
      }}
      bg={bg}
    >
      <Text fontSize='xl' color={color}>
        UTValg
      </Text>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text fontSize='md' color={color}>
          land
        </Text>
        <Text fontSize='md' color={color} sx={{ margin: '10px 40px' }}>
          {data.land}
        </Text>
      </Box>
    </Box>
  );
}

export default FilterDetailCard