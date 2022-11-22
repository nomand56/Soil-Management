import React, { useRef, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure,
    useToast,
    Select,
    Box
} from '@chakra-ui/react';
import { useProductsContext } from '../../context/products_context';
import {useWarehouseContext} from '../../context/warehouse_context'
function CreateWarehousePostalModal({specific}) {
    console.log("specific",specific)
    const { products} = useProductsContext()
    const {addWarehouseProducts,warehouseProductsSuccess:success,warehouseProductsError:error}=useWarehouseContext()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const initialRef = useRef();
    const [inPrice,setInPrice]=useState('')
    const [outPrice,setOutPrice]=useState('')
    const [stock,setStock]=useState()
    const [productID,setProductID]=useState()
    const [jord,setJord]=useState()
    const handleSubmit = (e) => {    
        e.preventDefault()
    setLoading(true);
        console.log(productID)
        const filterdProduct = products.filter((item) => item._id === productID)    
    
    const data={
        supplierPostalCode:specific[0].postalCode,
        description:filterdProduct[0].description,
        land:filterdProduct[0].land,
        image:filterdProduct[0].image,
        productName:filterdProduct[0].productName,
        stock:stock,
        inPrice:inPrice,
        price:outPrice,
        jord:jord,
    }
    addWarehouseProducts(data)
    if(success){
        toast({
            title: "Product Added Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
    setLoading(false);
        }

    onClose()
    } 
   
    return (
        <Box>
            <Button colorScheme='green' onClick={onOpen}>
                Add New Product
            </Button>
            <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new  WareHouse Product  </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>Products</FormLabel>
                            <Select  name='product' focusBorderColor='green.500'  onChange={(e)=>{
                                setProductID(e.target.value)
                            }}>
                                {products.map((item) => {
                                    return <option value={item._id}>{item.productName}</option>
                               
                               })}
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Jord</FormLabel>
                            <Select  name='product' focusBorderColor='green.500'  onChange={(e)=>{
                                setJord(e.target.value)
                            }}>
                                  <option disabled selected value> -- select an option -- </option>
                                 <option value="highmineral">High Mineral</option>
                                 <option value="lowmineral">Low Mineral</option>
                                
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Stock</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='Product Stock'
                                name='stock'
                                type='number'
                                focusBorderColor='green.500'
                                onChange={(e) => setStock(e.target.value)}

                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>In Price</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='Product In Price'
                                name='Inprice'
                                focusBorderColor='green.500'
                                onChange={(e) => setInPrice(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>out Price</FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='out Price'
                                name='outPrice'
                                focusBorderColor='green.500'
                                onChange={(e) => setOutPrice(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            isLoading={loading}
                            colorScheme='green'
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default CreateWarehousePostalModal
