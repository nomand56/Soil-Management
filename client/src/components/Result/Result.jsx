import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { landData } from '../../utils/land';
import ErrorPage from '../ErrorPage';
import { useCartContext } from '../../context/cart_context';
import { useProductsContext } from '../../context/products_context';
import { useHistory } from 'react-router-dom';

const Result = ({ data }) => {

  const {addToCart}= useCartContext()
  const {setData}=useProductsContext()
  const [state, setstate] = useState(null);
  const [product, setproduct] = useState(null);
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  const [errorstate, seterrorstate] = useState(false)
  let [obj, setobj] = useState({})
 const history=useHistory()
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
  console.log("landData",landData);
  console.log("state",data);

  function handleCheckout(e) {
     setobj( { ...data, productID: product?._id });
     handleAddtoCart()
    if (e.target.innerText === 'Sjekk Ut') {
      if (product === 'product not found')
      {
        seterrorstate(true)
      }
      else {

        let obj = { ...data, ...product }
       
        history.push('/StepperCheckout', {
          state:obj
        })
 
      }
    } else {
       if (product === 'product not found') {
         seterrorstate(true);
      }
       else {
         let obj = { ...data, ...product };
        history.push('/StepperCheckout', {
          state: obj,
        });

      }
    }
  }
  function handleAddtoCart() {
 setobj({ ...data, productID: product[0]._id,amount:1 });
     if (product === 'product not found') {
       seterrorstate(true);
     }else {
      addToCart({id:product[0]._id,amount:1,product:product[0]})
console.log("ADD TO CART",product[0])     
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
          <Box className='imgContainer'>
            <img
              src={state[0]?.img}
              alt={state[0]?.img}
              style={{ width: '100%', height: '300px' }}
            />
            <Text color={color} fontSize='xl' sx={{ margin: '10px 0px' }}>
              {state[0]?.type}
            </Text>
            <Text color={color} fontSize='md' sx={{ margin: '10px 0px' }}>
              {state[0]?.disc}
            </Text>
          </Box>
          <Box className='boxContainer'>
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
                  {data?.Landomrade}
                </Text>
              </Box>
              <Box>
                <Text fontSize='xl' sx={{ color: 'green' }}>
                  Jordhøyde
                </Text>
                <Text fontSize='md' color={color}>
                  {data?.Jordhoyde}
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
                  {product === 'product not found' ? '30' : 1}
                  
                </Text>
              </Box>
              <Box>
                {console.log('product', product)}
                <Text fontSize='xl' color={color}>
                  Price :
                  {product === 'product not found' ? '1000' : product && product[0]?.price}$
                </Text>
              </Box>
            </Box>
            <Box className='buttoncontainer'>
              {data.type === 'proffkunder' ? (
                <Button onClick={handleCheckout} sx={{'&:hover': { background: '#00A300' }}}>Checkout</Button>
              ) : (
                <Button
                  bg={bg}
                  onClick={handleCheckout}
                  sx={{ '&:hover': { background: '#00A300' } }}
                >
                  Sjekk Ut
                </Button>
              )}
              <Button
                onClick={handleAddtoCart}
                sx={{ '&:hover': { background: '#00A300' } }}
              >
                Legg i handlekurv
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <ErrorPage obj={obj} />
      )}
    </div>
  );
};

export default Result;
