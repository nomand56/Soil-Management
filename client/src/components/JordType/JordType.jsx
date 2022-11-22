import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import Wrapper from './style';
import img1 from '../../assets/land.jpg';
import img2 from '../../assets/veg.jpg';
import { useProductsContext } from '../../context/products_context';
function JordType({ setvalue, data }) {
  const [filterProducts,setfilterProducts]=useState([])
  console.log(data)
  const { products } = useProductsContext()
  console.log(products)
  useEffect(() => {

      let value = products.filter((f) => f.land == data.land)
      if(value.length === 0){
        setfilterProducts(products)
      }
      else{

        setfilterProducts(value)
      }

  },[])
  return (
    <div>
      <Wrapper>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',flexWrap:"wrap"}}>
          {
            filterProducts && filterProducts.map((product) => {
              return (
                <Box
                  sx={{
                    backgroundImage: `url(${product?.image})`,
                    backgroundPosition: 'center',
                    margin: '20px 0px',
                  }}
                  className='img_box'
                >
                  <Box className='box_p'>
                    <Text>{ product?.productName}</Text>
                    <Box width='70%'>
                      <Text fontSize='sm' textAlign='center'>
                       {product?.description}
                      </Text>
                    </Box>
                    <Button
                      name='jordType'
                      value={product?.productName}
                      onClick={setvalue}
                      sx={{
                        fontSize: 'small',
                        background: 'green.500',
                        '&:hover': { background: '#00A300' },
                      }}
                    >
                      Les mer om { product?.productName}
                    </Button>
                  </Box>
                </Box>
              );
            })
          }
          
        </Box>
      </Wrapper>
    </div>
  );
}

export default JordType;
