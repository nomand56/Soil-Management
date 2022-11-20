import React from 'react'
import { useParams } from 'react-router-dom'
import { useWarehouseContext } from '../../context/warehouse_context'
import {
  SidebarWithHeader,
  CreateWarehousePostalModal
} from '../components';
import { VStack, HStack, Spinner, Stack } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import WarehouseProductTable from './WarehouseProductTable';
function WarehouseProducts() {
  const { specificPostal } = useWarehouseContext()
  const { id } = useParams()
  const data = specificPostal.filter((item) => item.warehouse === id)
  console.log(data)
  return (
    <SidebarWithHeader>
      <HStack mb={5}>
        <CreateWarehousePostalModal specific={data}/>
          
      </HStack>
      <WarehouseProductTable specificProduct={data} />
    </SidebarWithHeader>
  );
}

export default WarehouseProducts