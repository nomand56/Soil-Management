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
function PostalTable() {
    const [postalCode,setPostalCode]=useState('')
    const [wareHouse, setWareHouse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [image, setBase64] = useState([])
    console.log("image", image)
    const {addProductType,} = useProductsContext();
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
                                <FormLabel>Postal Code</FormLabel>
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
                                <FormLabel>Postal Code</FormLabel>
                                <Input
                                    ref={initialRef}
                                    placeholder='Product Name'
                                    name='productName'
                                    focusBorderColor='#32995b'
                                    value={productType}
                                    onChange={(e) => setProductType(e.target.value)}
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

export default PostalTable;
