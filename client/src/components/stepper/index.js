import { Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const Land = () => {

    const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
    const bg = useColorModeValue('rgb(250,250,250)', '#32995b');  


  return (
    <div>
      <Box>
        <img
          alt='https://static.scientificamerican.com/sciam/cache/file/17028ECC-5CB0-42C8-A43BFCEA9EF40D8C.jpg'
          src='https://static.scientificamerican.com/sciam/cache/file/17028ECC-5CB0-42C8-A43BFCEA9EF40D8C.jpg'
        />
        <Text fontSize='xl' color={color} sx={{fontWeight:'bold'}}>
          High Minerals
        </Text>
      </Box>
    </div>
  );
}

export default Land