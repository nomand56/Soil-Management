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
  Textarea,
  Center,
  HStack,
  Image,
  VStack,
  Checkbox,
  Select,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useProductsContext } from '../../context/products_context';
import { useWarehouseContext } from '../../context/warehouse_context';
import axios from 'axios';
import FileBase64 from "react-file-base64";
function CreateNewProductModal() {

  let {
    new_product: {
      productName,
      price,
      stock,
      description,
      quantity,
      land,
      jord,
      featured,
      company,
      usedFor,
      supplierPostalCode,
    },
    updateNewProductDetails,
    createNewProduct,
    addType,
  } = useProductsContext();

  const [productsType, setProductsType] = useState("");
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setBase64] = useState([])


  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const toast = useToast();

  const removeImage = (index) => {
    setImageList((prev) => {
      prev.splice(index, 1);
      console.log(prev);
      return [...prev];
    });
  };
  const handleSubmit = async () => {

    if (
      !productName ||
      !description
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
      const product = {
        productName,
        description,
        image: res.data.url,
        land: productsType,
      };
      console.log(productsType)
      createNewProduct(product)
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
        Create New Product
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder='Product Name'
                  name='productName'
                  focusBorderColor='#32995b'
                  value={productName}
                  onChange={updateNewProductDetails}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Choose Product Type</FormLabel>
                <Select
                  placeholder='Choose Product Type'
                  name='warehouse'
                  focusBorderColor='#32995b'
                  onChange={(e) => {
                    setProductsType(e.target.value)
                  }}
                >
                  {addType &&
                    addType.map((m, i) => {
                      return <option key={i} value={m.productType}>{m.productType}</option>;
                    })}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder='Product Description'
                  name='description'
                  focusBorderColor='#32995b'
                  value={description}
                  onChange={updateNewProductDetails}
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

export default CreateNewProductModal;
