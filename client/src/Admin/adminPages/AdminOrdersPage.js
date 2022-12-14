import React from 'react';
import { SidebarWithHeader, OrdersTable } from '../components';
import { useOrderContext } from "../../context/order_context"
import { Heading, VStack, HStack, Button, Spinner } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
function AdminOrdersPage() {
  const {
    orders,
    admin_orders_loading: loading,
    admin_orders_error: error,
    fetchAdminOrders,
  } = useOrderContext();

  const handleRefresh = async () => {
    fetchAdminOrders();
  };
  console.log("Admin Orders Page", orders)

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
          <Heading color='red.500'>There was an error</Heading>
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
      <OrdersTable orders={orders} />
    </SidebarWithHeader>
  );
}

export default AdminOrdersPage;
