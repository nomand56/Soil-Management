import React from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewProductModal,
} from '../components';
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh }  from 'react-icons/bi';
import { useProductsContext } from '../../context/products_context';

function ProductsPage() {
  const {
    products,
    products_loading: loading,
    products_error: error,
    fetchProducts,
  } = useProductsContext();

  const handleRefresh = async () => {
    await fetchProducts();
  };

  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
          <CreateNewProductModal />
          <Button
            colorScheme='brown'
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
          <CreateNewProductModal />
          <Button
            colorScheme='brown'
            variant='outline'
            leftIcon={<BiRefresh />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
        </HStack>
        <VStack alignItems='center' justifyContent='center'>
          <Heading color='red.500'>There was an error</Heading>
        </VStack>
      </SidebarWithHeader>
    );
  }

  return (
    <SidebarWithHeader>
      <HStack mb={5}>
        <CreateNewProductModal />
        <Button
          colorScheme='brown'
          variant='outline'
          leftIcon={<BiRefresh />}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </HStack>
      <ProductsTable products={products} />
    </SidebarWithHeader>
  );
}

export default ProductsPage;
