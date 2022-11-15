import React from 'react';
import { Box, Badge, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function WarehouseCards({ products }) {
  console.log(products);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => {
        return (
          <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            sx={{ margin: '10px' }}
          >
            <Image src="https://www.prologis.com/sites/corporate/files/images/2019/09/large-ontario_dc9_3_11.jpg" alt={product.warehouseName} />
<Link to={`/singleWarehouseProduct/${product._id}`}>
 
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
                >
                {product.warehouseName}
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
               
              </Box>
            </Box>
      </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default WarehouseCards;
