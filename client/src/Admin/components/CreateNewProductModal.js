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

function CreateNewProductModal() {
  const [wareH, setwareH] = useState(null);
  const [ID, setID] = useState(0);
  const [serialCode, setserialCode] = useState(0);
  let {
    new_product: {
      productName,
      price,
      stock,
      description,
      category,
      featured,
      company,
      usedFor,
      supplierPostalCode,
    },
    updateNewProductDetails,
    createNewProduct,
  } = useProductsContext();

  const { warehouse, fetchWareHouses } = useWarehouseContext();
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);

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
useEffect(()=>{fetchWareHouses()},[])
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
  function setWareHouse(e) {
    setwareH(e.target.value);
    let data = warehouse.filter((f) => f.warehouseName === e.target.value);
    setID(data[0]._id);
    if (data[0].serialCode) { setserialCode(data[0].serialCode); console.log(data[0].serialCode);}

  }

  const handleSubmit = async () => {
    if (
      !productName ||
      !price ||
      !stock ||
      !description ||
      !category
    ) {
      return toast({
        position: 'top',
        description: 'Provide all the details',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (
      supplierPostalCode === 0 
    ) {
      return toast({
        position: 'top',
        description: `please provide a valid postalcode`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    if (supplierPostalCode <= 1 || supplierPostalCode >= (serialCode * 1000 - 1))
    {
        return toast({
          position: 'top',
          description: serialCode==0?"please provide a valid Postal Code":`please provide a valid postalcode between ${(serialCode-1)*1000} to ${(serialCode*1000)-1}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    // if (imageList.length < 1) {
    //   return toast({
    //     position: 'top',
    //     description: 'Add atleast one image',
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //   });
    // }
    setLoading(true);
    console.log('uploading');
    const product = {
      productName,
      price,
      stock,
      description,
      category,
      company,
      supplierPostalCode,
      supplierId: ID,
      featured,
      usedFor,
    };
    console.log(product);
    const responseCreate = await createNewProduct(product);
    setLoading(false);
    setwareH(null);
    if (responseCreate.success) {
      onClose();
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
        description: responseCreate.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  
  };


  return (
    <>
      <Button colorScheme='brown' onClick={onOpen}>
        Create New Product
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {wareH === null ? (
              <FormControl>
                <FormLabel>Choose WareHouse</FormLabel>
                <Select
                  placeholder='Choose Ware House'
                  name='warehouse'
                  focusBorderColor='brown.500'
                  onChange={setWareHouse}
                >
                  {warehouse &&
                    warehouse.map((m, i) => {
                      return <option key={i}>{m.warehouseName}</option>;
                    })}
                </Select>
              </FormControl>
            ) : (
              <>
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder='Product Name'
                    name='productName'
                    focusBorderColor='brown.500'
                    value={productName}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type='number'
                    placeholder='Product Price'
                    name='price'
                    focusBorderColor='brown.500'
                    value={price}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Stock</FormLabel>
                  <Input
                    type='number'
                    placeholder='Product Stock'
                    name='stock'
                    focusBorderColor='brown.500'
                    value={stock}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder='Product Description'
                    name='description'
                    focusBorderColor='brown.500'
                    value={description}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Category</FormLabel>
                  <Input
                    placeholder='Product Category'
                    name='category'
                    focusBorderColor='brown.500'
                    value={category}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Company</FormLabel>
                  <Input
                    placeholder='Product Company'
                    name='company'
                    focusBorderColor='brown.500'
                    value={company}
                    onChange={updateNewProductDetails}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Supplier Postal Code</FormLabel>
                  <Input
                    placeholder='Supplier Postal Code'
                    name='supplierPostalCode'
                    focusBorderColor='brown.500'
                    value={supplierPostalCode}
                    onChange={updateNewProductDetails}
                  />
                  <FormHelperText>Eg: 32100</FormHelperText>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Supplier ID</FormLabel>
                  <Input
                    placeholder='Supplier ID number'
                    name='supplierId'
                    focusBorderColor='brown.500'
                    value={ID}
                    disabled={true}
                  />
                  <FormHelperText>Eg: 635bfcd14d4210d7b56ba9f0</FormHelperText>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Usages</FormLabel>
                  <Input
                    placeholder='Product Usages'
                    name='usedFor'
                    focusBorderColor='brown.500'
                    value={usedFor.join(',').toString()}
                    onChange={updateNewProductDetails}
                  />
                  <FormHelperText>
                    Eg: vegetable , plants , trees
                  </FormHelperText>
                </FormControl>

                {/* <FormControl mt={4}>
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
              <Input {...getInputProps()} />
            </FormControl>

            <FormControl mt={4}>
              <HStack>
                {imageList.map((image, index) => {
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
            </FormControl> */}
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
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              loadingText='Creating Product'
              colorScheme='brown'
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
