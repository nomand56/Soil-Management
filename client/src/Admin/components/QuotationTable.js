import React, { useState } from 'react';
import { getAdminPrivilegeColor } from '../utils/helpers';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  SimpleGrid,
  Spinner,
  Select,
  useToast,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAdminContext } from '../../context/admin_context';

function QuotationsTable({data}) {
  const toast = useToast();
//   const { updateAdminPrivilege, deleteAdmin, fetchAdmins } = useAdminContext();
  const [loading, setLoading] = useState(false);
   const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
   const bg = useColorModeValue('rgb(250,250,250)', 'rgb(40,40,40)');
//   const handleEdit = async (e, id) => {
//     setLoading(true);
//     const privilege = e.target.value;
//     const response = await updateAdminPrivilege(id, privilege);
//     setLoading(false);
//     if (response.success) {
//       const { name, privilege } = response.data;
//       toast({
//         position: 'top',
//         description: `${name}'s privilege changed to ${privilege}`,
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       return await fetchAdmins();
//     } else {
//       return toast({
//         position: 'top',
//         description: response.message,
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleDelete = async (id) => {
//     setLoading(true);
//     const response = await deleteAdmin(id);
//     setLoading(false);
//     if (response.success) {
//       toast({
//         position: 'top',
//         description: response.message,
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       return await fetchAdmins();
//     } else {
//       return toast({
//         position: 'top',
//         description: response.message,
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

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
              <Th>Name</Th>
              <Th>PostalCode</Th>
              <Th>Phone</Th>
              <Th>Address</Th>
              <Th>product</Th>
          



              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.postal}</Td>
                  <Td>{item.phone}</Td>
                  <Td>{item.address}</Td>
                  <Td>{item.productDetails.land}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}

export default QuotationsTable;
