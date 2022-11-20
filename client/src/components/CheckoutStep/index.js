import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiErrorCircle } from 'react-icons/bi';
import { landData } from '../../utils/land';

const CheckoutStep = ({ allvalues }) => {
  console.log(allvalues)
  const [form, setform] = useState(false)
  const [state, setstate] = useState(null)
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  return (
    <Box sx={{ textAlign: 'center' }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Box style={{ width: '25%', minWidth: '300px', padding: '5px' }}>
          <Text color={color} fontSize='xl' sx={{ margin: '10px 0px' }}>
            hello
          </Text>
          <Text color={color} fontSize='md' sx={{ margin: '10px 0px' }}>
            hello1
          </Text>
        </Box>
        <Box
          sx={{
            width: '40%',
            minWidth: '300px',
            padding: '40px 20px',
            border: '1px solid green',
          }}
        >
          <Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Land
              </Text>
              <Text fontSize='sm' color={color}>
                lland
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Jord
              </Text>
              <Text fontSize='md' color={color}>
                jord Tyoe
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Landområde
              </Text>
              <Text fontSize='md' color={color}>
                loamorade
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Jordhøyde
              </Text>
              <Text fontSize='md' color={color}>
                Jordhøyde
              </Text>
            </Box>
            <Box>
              <Text fontSize='xl' sx={{ color: 'green', margin: '5px 0px' }}>
                Postnr
              </Text>
              <Text fontSize='md' color={color}>
                PostalCode
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: '40px 20px',
            width: '30%',
            minWidth: "300px",
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
            <Text fontSize='md'>$ 350</Text>
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
            <Text fontSize='md'>$ 450</Text>
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
            <Text fontSize='md'>$ 450</Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}

export default CheckoutStep