import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory } from 'react-router-dom';
import { landData } from '../../utils/land';
import ErrorPage from '../ErrorPage';

const Result = ({ data }) => {
  const history=useHistory();
  const [state, setstate] = useState(null);
  const [product, setproduct] = useState(null);
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  const [errorstate, seterrorstate] = useState(false)
  let [obj,setobj]=useState({})
  useEffect(() => {
    setstate(landData.filter((land) => land.type === data.land));
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_HOST}product/getproduct/landjord/${data.land}/${data.jordType}/${data.postalCode}`
      )
      .then((res) => {
        setproduct(res.data);
        console.log(res.data);
      });
  }, []);

  function handleCheckout(e) {
     setobj( { ...data, productID: product?._id });
    if (e.target.innerText === 'Sjekk Ut') {
      if (product === 'product not found')
      {
        seterrorstate(true)
      }
      else {
        
      }
    } else {
       if (product === 'product not found') {
         seterrorstate(true);
      }
       else {
         
      }
    }
  }
  function handleAddtoCart() {
 setobj({ ...data, productID: product?._id });
    
     if (product === 'product not found') {
       seterrorstate(true);
     }

  

  }
  return (
    <div style={{ margin: '20px auto' }}>
      {state && !errorstate ? (
        <Box
          sx={{
            border: '2px solid green',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Box style={{ width: '25%', minWidth: '250px', padding: '5px' }}>
            <img
              src={state[0]?.img}
              alt={state[0]?.img}
              style={{ width: '100%', height: '300px' }}
            />
            <Text color={color} fontSize='xl' sx={{ margin: '10px 0px' }}>
              {state[0].type}
            </Text>
            <Text color={color} fontSize='md' sx={{ margin: '10px 0px' }}>
              {state[0].disc}
            </Text>
          </Box>
          <Box sx={{ width: '75%', padding: '40px 20px' }}>
            <Box className='detailscard'>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Land
                </Text>
                <Text fontSize='sm' color={color}>
                  {data?.land}
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Jord
                </Text>
                <Text fontSize='md' color={color}>
                  {data?.jordType}
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Landområde
                </Text>
                <Text fontSize='md' color={color}>
                  {data?.Landområde}
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Jordhøyde
                </Text>
                <Text fontSize='md' color={color}>
                  {data?.Jordhøyde}
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Postnr
                </Text>
                <Text fontSize='md' color={color}>
                  {data?.postalCode}
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                margin: '10px 0px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                border: '1px solid green',
                flexWrap: 'wrap',
              }}
            >
              <Box>
                <Text fontSize='xl' color={color}>
                  Quantity :
                  {product === 'product not found' ? '30' : product?.quantity}
                  KG
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' color={color}>
                  Price :
                  {product === 'product not found' ? '###' : product?.price}$
                </Text>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                padding: '10px',
                margin: '10px',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {data.type === 'proffkunder' ? (
                <Button onClick={handleCheckout}>Checkout</Button>
              ) : (
                <Button bg={bg} onClick={handleCheckout}>
                  Sjekk Ut
                </Button>
              )}
              <Button onClick={handleAddtoCart}>Legg i handlekurv</Button>
            </Box>
          </Box>
        </Box>
      ) : <ErrorPage obj={obj} />}
    </div>
  );
};

export default Result;
