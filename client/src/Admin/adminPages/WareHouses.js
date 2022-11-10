import React from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewWareHouseModel,
} from '../components';
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';

import { useWarehouseContext } from '../../context/warehouse_context';
import WarehouseCards from '../components/WarehouseCards';

function WareHouses() {
  const {
    warehouse,
    warehouse_loading: loading,
    warehouse_error: error,
    fetchWareHouses,
  } = useWarehouseContext();

  const handleRefresh = async () => {
    await fetchWareHouses();
  };

  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
          <CreateNewWareHouseModel />
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
          <CreateNewWareHouseModel />
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
          colorScheme='brown'
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

export default WareHouses;
