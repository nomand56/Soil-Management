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
import FileBase64 from "react-file-base64";
function CreateNewProductModal() {
  const [wareH, setwareH] = useState(null);
  const [ID, setID] = useState(0);
  const [PostCode, setPostCode] = useState('');
  
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

  const { productType, setProductType } = useWarehouseContext();
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image,setBase64]=useState([])

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImageList((prev) => {
          return [...prev, reader.result];
        });
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });
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
    console.log('uploading');
    const product = {
      productName,
      jord,
      image,
      productType: productType,
    };

    const responseCreate = await createNewProduct(product);
    setLoading(false);
    setwareH(null);
    if (responseCreate.success) {
      return toast({
        position: 'top',
        description: 'Product created',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      return toast({
        position: 'top',
        description:"error while adding product.!!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  
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
                  onChange={setProductType}
                >
                  {addType &&
                    addType.map((m, i) => {
                      return <option key={i}>{m.productType}</option>;
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
                  <FormLabel>Jord</FormLabel>
                  <Select
                    placeholder='JordType'
                    name='jord'
                    focusBorderColor='#32995b'
                    value={jord}
                    onChange={updateNewProductDetails}
                  >
                    <option value='highmineral'>High Minerals</option>
                    <option value='lowmineral'>Low Minerals</option>
                  </Select>
                </FormControl>
              <FormControl mt={4}>
              <FormLabel>Images</FormLabel>
              <Center
                bg='brown.50'
                minHeight={100}
                my={5}
                borderWidth={3}
                borderColor='brown.200'
                borderStyle='dashed'
                borderRadius='lg'
                {...getRootProps()}
              >
                {isDragActive ? (
                  <p>Drag your files here</p>
                ) : (
                  <p>
                    Drag drop image files here, or click to select files
                    <br />
                    (Only *.jpeg and *.png images will be accepted)
                  </p>
                )}
              </Center>
              <FileBase64 
              type="file"
              multiple={false} 
              onDone={({ base64 }) => setBase64(base64)} />
              
            </FormControl>

            <FormControl mt={4}>
              <HStack>
                {[image].map((image, index) => {
                  return (
                    <VStack key={index} spacing={3}>
                      <Image
                        src={image}
                        boxSize='70px'
                        objectFit='cover'
                        borderRadius='lg'
                      />
                      <Button
                        size='xs'
                        variant='outline'
                        colorScheme='red'
                        onClick={() => removeImage(index)}
                      >
                        Remove
                      </Button>
                    </VStack>
                  );
                })}
              </HStack>
            </FormControl> 
                <FormControl mt={4}>
                  <Checkbox
                    name='featured'
                    colorScheme='brown'
                    isChecked={featured}
                    onChange={updateNewProductDetails}
                  >
                    Featured
                  </Checkbox>
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
