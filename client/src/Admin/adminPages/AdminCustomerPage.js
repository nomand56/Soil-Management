import React from 'react';
import { SidebarWithHeader,CustomerTable } from '../components';
import { Heading, VStack, HStack, Button, Spinner } from '@chakra-ui/react';
import {BiRefresh} from 'react-icons/bi';
import { useUserContext } from '../../context/user_context';
function AdminCustomerPage() {
  const {
    Users,
 loading,
     error,
    fetchUser
  } = useUserContext();

  const handleRefresh = async () => {
    fetchUser()
  };

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
    <CustomerTable users={Users} />
    </SidebarWithHeader>
  );
}

export default AdminCustomerPage;
