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
import { useProductsContext } from '../../context/products_context';
import { PreLoader } from '../../Admin/components';
import Form from '../form';

function BasicModal({ open, setopen, state }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    filtered_products:products,
    filtered_products_loading: loading,
    filtered_products_error: error,
    filteredProducts,
  } = useProductsContext();
  useEffect(() => {
    filteredProducts(state);
  }, []);

 
  console.log("filtered",products);
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
              {products ? (<GridView products={products} />):(<Form product={state}/> )
              }
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
