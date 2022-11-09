import React, { useState } from 'react';
import { useUserContext } from '../../context/user_context';
import { useToast } from '@chakra-ui/react';
import { PreLoader } from '../../Admin/components';
import useMounted from '../../hooks/useMounted';
import logo from '../../assets/logo.png';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Image,
} from '@chakra-ui/react';
import { useProductsContext } from '../../context/products_context';

export default function Form({ product }) {
  const {
    inquiry_form_error: error,
    inquiry_form_loadng: loading,
    InquiryForm,
    success,
  } = useProductsContext();
  const toast = useToast();
  const mounted = useMounted();
  const [email, setEmail] = useState('');
  const [loadings, setLoading] = useState(false);
  const handleSubmit = () => {
    if (!email) {
      return toast({
        position: 'top',
        title: 'Invalid Input',
        description: 'Provide all the credentials',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (mounted.current) {
      setLoading(true);
    }
    const data = {
      email,
      postalCode: product.postalCode,
      quantity: product.quantity,
      soil: product.soil,
      service: product.for,
    };
    InquiryForm(data);
    if (success) {
      toast({
        position: 'top',
        description: 'FORM SUBMITTED ',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt='logo' w='50%' />
        </Stack>
        <Box bg={'white'} rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                placeholder='Enter your email address'
                variant='filled'
                focusBorderColor='brown.500'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='name'>
              <FormLabel>SOIL TYPE</FormLabel>
              <Input
                type='text'
                variant='filled'
                defaultValue={product.soil}
                disabled
                bg={'gray.400'}
              />
            </FormControl>
            <FormControl id='name'>
              <FormLabel>Service</FormLabel>
              <Input
                type='text'
                variant='filled'
                focusBorderColor='brown.500'
                defaultValue={product.for}
                disabled
                bg={'gray.400'}
              />
            </FormControl>
            <FormControl id='name'>
              <FormLabel>Postal Code</FormLabel>
              <Input
                type='text'
                variant='filled'
                focusBorderColor='brown.500'
                defaultValue={product.postalCode}
                disabled
                bg={'gray.400'}
              />
            </FormControl>
            <FormControl id='name'>
              <FormLabel>Quantity</FormLabel>
              <Input
                type='text'
                variant='filled'
                focusBorderColor='brown.500'
                defaultValue={product.quantity}
                bg={'gray.400'}
                disabled
              />
            </FormControl>

            <Stack spacing={10}>
              <Button
                isLoading={loadings}
                bg={'brown.400'}
                color={'white'}
                _hover={{
                  bg: 'brown.500',
                }}
                onClick={() => handleSubmit()}
              >
                Submit Form
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
