import React from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewWareHouseModel,
} from '../components';
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import {useProductsContext} from '../../context/products_context'

function PostalCode() {
    const {getPostalCode}=useProductsContext()
  const handleRefresh = async () => {
    await getPostalCode();
  };
  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
          <CreateNewWareHouseModel />
          <Button
            colorScheme='green'
            variant='outline'
            leftIcon={<BiRefresh />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </HStack>
        <VStack alignItems='center' justifyContent='center'>
          <Spinner size='lg' color='brown.500' />
        </VStack>
      </SidebarWithHeader>
    );
  }

  if (error) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
          <CreateNewWareHouseModel />
          <Button
            colorScheme='green'
            variant='outline'
            leftIcon={<BiRefresh />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </HStack>
        <VStack alignItems='center' justifyContent='center'>
          <Heading color='red.500'>There was an 0error</Heading>
        </VStack>
      </SidebarWithHeader>
    );
  }

  return (
    <SidebarWithHeader>
      <HStack mb={5}>
        <CreateNewWareHouseModel />
        <Button
          colorScheme='green'
          variant='outline'
          leftIcon={<BiRefresh />}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </HStack>
    <WarehouseCards products={warehouse}/>
    </SidebarWithHeader>
  );
}

export default PostalCode;
