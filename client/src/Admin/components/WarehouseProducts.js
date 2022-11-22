import React from 'react'
import { useParams } from 'react-router-dom'
import { useWarehouseContext } from '../../context/warehouse_context'
import {
  SidebarWithHeader,
  CreateWarehousePostalModal
} from '../components';
import { VStack, HStack, Spinner, Stack ,Button,Heading,} from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import WarehouseProductTable from './WarehouseProductTable';
function WarehouseProducts() {
  const { specificPostal,fetchWarehouseProducts,warehouseProductsError:error,warehouseProductsLoading:loading } = useWarehouseContext()
  const { id } = useParams()
  const data = specificPostal.filter((item) => item.warehouse === id)
  console.log(data)
  const handleRefresh = async () => {
    await fetchWarehouseProducts();
  };


  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
        <CreateWarehousePostalModal specific={data}/>
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
        <CreateWarehousePostalModal specific={data}/>
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
        <CreateWarehousePostalModal specific={data}/>
        <Button
            colorScheme='green'
            variant='outline'
            leftIcon={<BiRefresh />}
            onClick={handleRefresh}
          >
            Refresh
          </Button>
      </HStack>
      <WarehouseProductTable specificProduct={data} />
    </SidebarWithHeader>
  );
}

export default WarehouseProducts