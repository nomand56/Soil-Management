import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,

} from '@chakra-ui/react';

import { useProductsContext } from '../../context/products_context';
import axios from 'axios';

function CreateNewTypeModal() {
  const [productType, setProductType] = useState('')

  const [description, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setBase64] = useState('')
  console.log("image", image)
  const { addProductType, } = useProductsContext();

  // useEffect(() => { fetchWareHouses() }, [])

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const toast = useToast();



  const handleSubmit = async () => {
    if (
      !productType
    ) {
      return toast({
        position: 'top',
        description: 'Provide all the details',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(true);
    let data = new FormData()
    data.append('file', image);
    data.append('upload_preset', 'soilmanagement');
    data.append('cloud_name', 'deseywypd');
    axios.post('https://api.cloudinary.com/v1_1/deseywypd/image/upload', data).then((res) => {
      addProductType({ productType, image: res.data.url, description });
      setLoading(false);
      onClose();
      toast({
        position: 'top',
        description: 'Product Type Added Successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

    })

  };


  return (
    <>
      <Button colorScheme='green' onClick={onOpen}>
        Create New Product Type
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new product Type</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <>
              <FormControl>
                <FormLabel>Product Type</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder='Product Name'
                  name='productName'
                  focusBorderColor='#32995b'
                  onChange={(e) => setProductType(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Product Description</FormLabel>
                <textarea
                  style={{ width: '100%', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
                  ref={initialRef}
                  placeholder='Enter Product Type Description'
                  name='description'
                  focusBorderColor='#32995b'
                  onChange={(e) => setDesc(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Images</FormLabel>
                <Input
                  type='file'
                  onChange={(e) => setBase64(e.target.files[0])}
                />
              </FormControl>
            </>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText='Creating Product'
              colorScheme='green'
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateNewTypeModal;
