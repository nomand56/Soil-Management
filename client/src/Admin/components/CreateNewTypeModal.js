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
function CreateNewTypeModal() {
    const [productType,setProductType]=useState('')
    const [imageList, setImageList] = useState([]);
    const [desc,setDesc]=useState('')
    const [loading, setLoading] = useState(false);
    const [image, setBase64] = useState([])
    console.log("image", image)
    const {addProductType,} = useProductsContext();
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
    // useEffect(() => { fetchWareHouses() }, [])
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
        console.log('uploading');
        addProductType({productType,image})


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
                                    value={productType}
                                    onChange={(e) => setProductType(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Product Description</FormLabel>
                                <textarea
                                    style={{width:'100%'}}
                                    ref={initialRef}
                                    placeholder='Enter Product Type Description'
                                    name='description'
                                    focusBorderColor='#32995b'
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
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
