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
import { useProductsContext } from '../../context/products_context';
import { useWarehouseContext } from '../../context/warehouse_context';
import { Placeholder } from 'react-bootstrap';

function CreatePostalCodeModal() {
    const [postalCode, setPostalCode] = useState('')
    const [warehouses, setWarehouses] = useState('')
    const [loading, setLoading] = useState(false);
    const { warehouse } = useWarehouseContext()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();
    const toast = useToast();
    const { addPostalCode } = useProductsContext();
console.log("warehouse",warehouses)


    const handleSubmit = async () => {
        if (
            !postalCode
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
        addPostalCode({postalCode,warehouse:warehouses})
        setLoading(false);
        onClose();
        toast({
            position: 'top',
            description: 'Postal Code Added',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

       
    };


    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>
                Create New Postal Code
            </Button>

            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new product Type</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <>
                            <FormControl>
                                <FormLabel>Postal Codes</FormLabel>
                                <Input
                                    ref={initialRef}
                                    placeholder='Postal Codes'
                                    name='productName'
                                    focusBorderColor='#32995b'
                                    onChange={(e) => setPostalCode(e.target.value)}


                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Select WareHouse</FormLabel>
                                <Select  placeholder='Select WareHouse'
                                onChange={(e)=>{
                                    setWarehouses(e.target.value)
                                    
                                }}>
                                    {warehouse.map((item) => (
                                        <option value={item._id}>{item.warehouseName}</option>
                                    ))}
                                </Select>
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

export default CreatePostalCodeModal;
