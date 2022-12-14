import React from 'react'
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
  StackDivider,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { BiChevronDown } from 'react-icons/bi';
import { useWarehouseContext } from '../../context/warehouse_context';
function WarehouseProductTable({ specificProduct }) {
  const { warehouseProducts } = useWarehouseContext()
  console.log("Warehouse Product Table", warehouseProducts)
  const bg = useColorModeValue('rgb(255, 255, 255)', 'rgb(50,50,50)');
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(200,200,200)');
  if (warehouseProducts.length == 0) {
    return (
      <Box>
        <Text>No Products Found</Text>
      </Box>
    )
  }
  const filteredProducts = warehouseProducts?.filter((item) => item.supplierPostalCode[0]?.warehouse === specificProduct[0]?.warehouse)
  // const filterdProduct=warehouseProducts.filter((item)=>item.supplierPostalCode[0].warehouse === specificProduct.warehouse)
  console.log("filterd", filteredProducts)
  return (<Flex>
    <Table variant='simple' color={color} bg={bg}   >
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Product Name</Th>
          <Th>Product Type</Th>
          <Th>Description</Th>
          <Th>inPrice</Th>
          <Th>outPrice</Th>
          <Th>Stock</Th>
          <Th>jord</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {filteredProducts?.map((product, index) => {
          const { inPrice, description, productName, image, price, land, jord, supplierPostalCode: postal, _id, stock } =
            product;
          return (
            <Tr key={index}>
              <Td>
                <Image
                  src={image}
                  boxSize='100px'
                  objectFit='cover'
                  borderRadius='lg'
                />
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>

                  <Text as='b'>{productName}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{land}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{description}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{inPrice}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{price}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{stock}</Text>

                </VStack>
              </Td>
              <Td>
                <VStack alignItems='flex-start' spacing={1}>
                  <Text as='b'>{jord}</Text>
                </VStack>
              </Td>
              <Td>
                <Menu>
                  <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                    Actions
                  </MenuButton>
                  <MenuList>
                    <Link to={`/adminproducts/${_id}`}>
                      <MenuItem>View</MenuItem>
                    </Link>
                    <MenuItem>

                    </MenuItem>
                    {/* <MenuItem onClick={() => handleDelete(_id)}>
                    Delete
                  </MenuItem> */}
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>

    <Box sx={{ width: "30%", marginLeft: "5px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "10px", height: "fit-content", padding: "10px" }} >
      <b>

        Postal Codes
      </b>

      {specificProduct.map((product, index) => {
        return <Box h='40px' bg="#edf2f7" padding={2} sx={{ border: "0.5px solid grey", borderRadius: "10px", boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px", fontWeight: "700" }} >
          {product.postalCode}
        </Box>
      })}

    </Box>


  </Flex>

  )
}

export default WarehouseProductTable