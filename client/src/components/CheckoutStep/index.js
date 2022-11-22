import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const CheckoutStep = ({ allvalues }) => {
  const history=  useHistory();
  console.log("values",allvalues)
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  return (
    <Box sx={{ textAlign: 'center',padding:"20px" }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            width: '25%',
            minWidth: '300px',
            padding: '5px',
            textAlign: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <FaCheckCircle
              style={{ fontSize: '80px', color: 'green', margin: '20px auto' }}
            />
          </Box>
          <Text>
            Takk for at du bestiller produktet ditt kommer snart på dørstokken
          </Text>
          <Box>
            <Button color={color} bg={bg} onClick={()=>{
              history.push('/')
            }}>handle mer</Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: '40%',
            minWidth: '300px',
            padding: '40px 20px',
            border: '2px solid green',
          }}
        >
          <Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Land
              </Text>
              <Text fontSize='sm' color={color}>
                {allvalues?.land}
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Jord
              </Text>
              <Text fontSize='md' color={color}>
                {allvalues?.jordType}
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Landområde
              </Text>
              <Text fontSize='md' color={color}>
                {allvalues?.Landomrade}
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Jordhøyde
              </Text>
              <Text fontSize='md' color={color}>
                {allvalues?.Jordhoyde}
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Postnr
              </Text>
              <Text fontSize='md' color={color}>
                {allvalues?.postalCode}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: '40px 20px',
            width: '30%',
            minWidth: '300px',
            border: '1px solid green',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
            }}
          >
            <Text fontSize='xl'>Quantity</Text>
            <Text fontSize='md'>30KG</Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
              borderBottom: '1px solid green',
            }}
          >
            <Text fontSize='xl'>Price</Text>
            <Text fontSize='md'>{allvalues?.price}</Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
            }}
          >
            <Text fontSize='xl'>Delivery</Text>
            <Text fontSize='md'>
              {allvalues?.totalPrice - allvalues?.price}
            </Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
              borderBottom: '1px solid green',
            }}
          >
            <Text fontSize='xl'>Tax</Text>
            <Text fontSize='md'>$ 50</Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
              borderBottom: '1px solid green',
            }}
          >
            <Text fontSize='xl'>Sub Total</Text>
            <Text fontSize='md'>$ {allvalues?.totalPrice + 50}</Text>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 0px',
              borderBottom: '1px solid green',
            }}
          >
            <Text fontSize='xl'>Order Total</Text>
            <Text fontSize='md'>$ {allvalues?.totalPrice + 50}</Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}

export default CheckoutStep