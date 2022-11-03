import React, { useState, useEffect } from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import GridView from '../GridView';
import axios from 'axios';

function BasicModal({ open, setopen, state }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [products,setproducts]=useState([])
  useEffect(() => {
    axios.post('api/v1//product/filterProducts', state).then((res) => {
      setproducts(res.data)
    });
  },[])

  return (
    <>
      <Modal
        isOpen={open}
        onClose={() => {
          setopen(!open);
        }}
        size={'full'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Green Waste Company</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <GridView products={products} />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => {
                setopen(!open);
              }}
            >
              Close
            </Button>
            <Button variant='ghost'>View More Products</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicModal;
