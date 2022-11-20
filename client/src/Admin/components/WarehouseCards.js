import React from 'react';
import { Box, Badge, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useWarehouseContext } from '../../context/warehouse_context';
import { useHistory } from 'react-router-dom'
function WarehouseCards({ products }) {
  const history = useHistory()
  console.log(products);
  

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => {
        return (
          <Link to={`/admin/WarehousePostalPage/${product._id}`}>
          <Box
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            sx={{ margin: '10px' }}
          >
            <Image src="https://www.prologis.com/sites/corporate/files/images/2019/09/large-ontario_dc9_3_11.jpg" alt={product.warehouseName} />

            <Box p='6'  >
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

          </Box>
      </Link>
        );
      })}
    </Box>
  );
}

export default WarehouseCards;
