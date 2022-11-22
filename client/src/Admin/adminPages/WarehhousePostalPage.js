import React, { useEffect } from 'react';
import {
  ProductsTable,
  SidebarWithHeader,
  CreateNewWareHouseModel,
  PostalTable,
  CreatePostalCodeModal,
  WarehousePostal,
} from '../components';

import {useWarehouseContext} from "../../context/warehouse_context"
import { HStack, VStack, Spinner, Heading, Button } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

function WarehousePostalPage() {
const { id } = useParams()
const { specificPostal, fetchSpecificPostal, specific_postal_loading: loading, specific_postal_error: error } = useWarehouseContext()
const handleRefresh = () => {
    fetchSpecificPostal(id)
    }

  useEffect(() => {
    fetchSpecificPostal(id)
    }, [])  
  if (loading) {
    return (
      <SidebarWithHeader>
        <HStack mb={5}>
  
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
          <CreateNewWareHouseModel warehouse={id} />
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
        <Button
          colorScheme='green'
          variant='outline'
          leftIcon={<BiRefresh />}
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </HStack>
      <WarehousePostal products={specificPostal}/>
    </SidebarWithHeader>
  );
}

export default WarehousePostalPage;
