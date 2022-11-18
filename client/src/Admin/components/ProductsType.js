import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { formatPrice } from '../utils/helpers';
import { useProductsContext } from '../../context/products_context';
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  VStack,
  HStack,
  Spinner,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import UpdateProductModal from './UpdateProductModal';

function ProductsTypeTable({ products }) {
  const toast = useToast();
  const { fetchProducts, deleteProduct } = useProductsContext();
  const [loading, setLoading] = useState(false);
const color = useColorModeValue('rgb(10,10,10)', 'rgb(180,180,180)');
const bg = useColorModeValue('transparent', 'rgb(40,40,40)');
  const handleDelete = async (id) => {
 
    setLoading(true);
    const response = await deleteProduct(id);
    setLoading(false);
    if (response.success) {
      toast({
        position: 'top',
        description: response.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
    });
      return await fetchProducts();
    } else {
      return toast({
        position: 'top',
        description: response.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      {loading ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Spinner size='lg' color='brown.500' />
        </HStack>
      ) : (
        <Table variant='simple' color={color} bg={bg}>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => {
              
              return (
                <Tr key={index}>
                  <Td>
                    <Image
                      src={product.image}
                      boxSize='100px'
                      objectFit='cover'
                      borderRadius='lg'
                    />
                  </Td>
                  <Td>
                    <VStack alignItems='flex-start' spacing={1}>
                      {/* <Text as='b'>{productName.substring(0, 21)}...</Text> */}
                      <Text fontSize='sm' color='green.500'>
                        {product.productType}
                      </Text>
                    </VStack>
                  </Td>
                
                  {/* <Td>{quantity}</Td> */}
                  {/* <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <Link to={`/adminproducts/${product._id}`}>
                          <MenuItem>View</MenuItem>
                        </Link>
                        <MenuItem>
                          <UpdateProductModal id={_id} />
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(_id)}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td> */}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}

export default ProductsTypeTable;
