import React, { useState } from 'react';
import { useUserContext } from '../../context/user_context';
import { useToast } from '@chakra-ui/react';
import { PreLoader } from '../../Admin/components'
import useMounted from "../../hooks/useMounted"
import logo from "../../assets/logo.svg"
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

export default function RegisterPage() {
  const { createUser,loading,error,isAuthenticated } = useUserContext();
  const toast = useToast();
  const mounted = useMounted();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadings, setLoading] = useState(false);
  const [name, setName] = useState("");


  const handleSubmit = async () => {
    if (!email || !password || !name) {
      return toast({
        position: 'top',
        title: 'Invalid Input',
        description: 'Provide all the credentials',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);
     createUser(email, password,name);
    if (mounted.current) {
      setLoading(false);
    }
    if (isAuthenticated) {
      return toast({
        position: 'top',
        description: `Account Creeated Successfully`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    };
    
  } 
  if(error){
    toast({
      position: 'top',
      description: "Error Creating Account",
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
    if (loading) {
      return <PreLoader />;
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Image src={logo} alt='logo' w='50%' />
        </Stack>
        <Box bg={'white'} rounded={'lg'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='name'>
              <FormLabel>Enter Your Name</FormLabel>
              <Input
                type='text'
                placeholder='Enter your full name'
                variant='filled'
                focusBorderColor='brown.500'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
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
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter your password'
                variant='filled'
                focusBorderColor='brown.500'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleSubmit}
              >
              Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
