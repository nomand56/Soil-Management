import React, { useState } from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewProductModal,
  ProductsTypeTable,
  CreateNewTypeModal,
} from '../components';
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import { useProductsContext } from '../../context/products_context';
import { useWarehouseContext } from '../../context/warehouse_context';

function ProductsType() {
  const {
    addType,
    add_type_error: loading,
    add_type_loading: error,
    addProductType,
    fetchProductType
  } = useProductsContext();
  const handleRefresh = async () => {
    await fetchProductType();
  };

  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
          <CreateNewTypeModal />
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
        <CreateNewTypeModal />
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
      <CreateNewTypeModal />
        <Button
          colorScheme='green'
          variant='outline'
          leftIcon={<BiRefresh />}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </HStack>
      <ProductsTypeTable products={addType} />
    </SidebarWithHeader>
  );
}

export default ProductsType;
