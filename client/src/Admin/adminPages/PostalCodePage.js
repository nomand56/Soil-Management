import React from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewWareHouseModel,
  PostalTable,
  CreatePostalCodeModal,
} from '../components';
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import { useProductsContext } from '../../context/products_context'

function PostalCodePage() {
  const { getPostalCode, postal_code_error: error, postal_code_loading: loading,postalCode:product } = useProductsContext()
  const handleRefresh = async () => {
    await getPostalCode();
  };
console.log("postal",product)
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
        <CreatePostalCodeModal/>
        <Button
          colorScheme='green'
          variant='outline'
          leftIcon={<BiRefresh />}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </HStack>
      <PostalTable products={product}/>
    </SidebarWithHeader>
  );
}

export default PostalCodePage;
