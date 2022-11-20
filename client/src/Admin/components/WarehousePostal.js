import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { useWarehouseContext } from '../../context/warehouse_context'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  SimpleGrid,
  Spinner,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';

import { BiChevronDown } from 'react-icons/bi';
function WarehousePostal({products}) {
const {warehouse} = useWarehouseContext()
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');
  const bg = useColorModeValue('rgb(250,250,250)', 'rgb(40,40,40)');
const[loading,setLoading]=React.useState(false)
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
              <Th>Postal Codes</Th>
              <Th>Warehouses</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((item, index) => {
              const {
                postalCode,
                warehouse:id
              } = item;
              const data=warehouse.filter((item)=>item._id===id)
 
              return (
                <Tr key={index}>
                  <Td>{postalCode}</Td>
                  <Td>{data[0].warehouseName}</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <Link to={`/admin/WarehouseProducts/${id}`}>
                          <MenuItem>View</MenuItem>
                        </Link>
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
  )
}

export default WarehousePostal