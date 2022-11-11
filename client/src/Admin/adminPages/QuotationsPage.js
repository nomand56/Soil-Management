import React from 'react';
import { SidebarWithHeader, CustomerTable } from '../components';
import { Heading, VStack, HStack, Button, Spinner } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import { useUserContext } from '../../context/user_context';
import QuotationsTable from '../components/QuotationTable';
import { useProductsContext } from '../../context/products_context';
function QuotationsPage() {
    const {
        inquiry_form_error: error,
        inquiry_form_loading:loading,
        fetchInquiry,
        inquiryForm
    } = useProductsContext();

    const handleRefresh = async () => {
        fetchInquiry()
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
            <QuotationsTable data={inquiryForm} />
        </SidebarWithHeader>
    );
}

export default QuotationsPage;
