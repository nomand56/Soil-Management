import { Box, Button, Input, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'


const PostalCode = ({setvalue}) => {


      const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
      const bg = useColorModeValue('rgb(250,250,250)', '#32995b');  
const toast = useToast();
    const [data, setdata] = useState(null)
    function handleChange(e)
    {
setdata(e.target.value)
    }
  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <Text color={color} sx={{ margin: '20px 0px' }}>
        Skriv inn postnummer
      </Text>
      <Input
        placeholder='Skriv inn postnummer'
        required
        onChange={handleChange}
      />
      <Box sx={{ margin: '20px 0px', textAlign: 'right' }}>
        <Button
          name='postalCode'
          value={data}
          bg={bg}
          color={color}
          onClick={(e) => {
            if (data) {
              setvalue(e);
            } else {
              toast({
                position: 'top',
                description: 'Provide Postal Code.!!',
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            }
          }}
          sx={{ '&:hover': { background: '#00A300' } }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}

export default PostalCode