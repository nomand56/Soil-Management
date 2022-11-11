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
import { useUserContext } from '../../context/user_context';

 function CustomerTable({ users }) {
  const toast = useToast();
  const { fetchUser, deleteUser} = useUserContext();
  const [loading, setLoading] = useState(false);
const color = useColorModeValue('rgb(10,10,10)', 'rgb(180,180,180)');
const bg = useColorModeValue('transparent', 'rgb(40,40,40)');
  const handleDelete = async (id) => {
    console.log(id)
    setLoading(true);
    const response = await deleteUser(id);
    setLoading(false);
    console.log(response)
    if (response.success) {
      toast({
        position: 'top',
        description: response.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      return await fetchUser();
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
              <Th>userType</Th>
              <Th>email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => {
            const { name, email, userType,_id} =user;
              return (
                <Tr key={index}>
                  <Td>
                    <Image
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      boxSize='100px'
                      objectFit='cover'
                      borderRadius='lg'
                    />
                  </Td>
                  <Td>
                    <VStack alignItems='flex-start' spacing={1}>
                      <Text as='b'></Text>
                      <Text fontSize='sm' color='green.500'>
                        {name}
                      </Text>
                    </VStack>
                  </Td>
                  <Td>
                    <VStack alignItems='flex-start' spacing={1}>
                      {/* <Text as='b'>{category}</Text> */}
                      <Text fontSize='sm' color='brown.500'>
                        {userType}
                      </Text>
                    </VStack>
                  </Td>
                  <Td>{email}</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        {/* <Link to={`/admin/products/${_id}`}>
                          <MenuItem>View</MenuItem>
                        </Link> */}
                        {/* <MenuItem>
                          <UpdateProductModal id={_id} />
                        </MenuItem>} */}
                        <MenuItem onClick={() => handleDelete(_id)}>
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}

export default CustomerTable;