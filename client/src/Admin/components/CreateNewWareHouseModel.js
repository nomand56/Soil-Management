import React, { useState, useRef, useCallback } from 'react';
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
import { Country, State, City } from 'country-state-city';

const countries = [Country.getCountryByCode('NO')];
const states = State.getStatesOfCountry('NO');
const cities = City.getCitiesOfCountry('NO');


function CreateNewWareHouseModel() {
  const {
    new_warehouse: {
      warehouseName,
      OwnerName,
      PostalCode,
      street,
      state,
      city,
      country,
      company,
    },
    warehouse,
    updateNewWareHouseDetails,
    createWareHouse,
  } = useWarehouseContext();

console.log(warehouse)
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const toast = useToast();



  const handleSubmit = async () => {
    if (
      !warehouseName ||
      !OwnerName ||
     
      !street ||
      !state ||
      !country ||
      !city || !company
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
      const warehouse = {
          warehouseName,
          OwnerName,
          PostalCode,
          street,
          state,
          city,
          country,
          company,
      };
   
    const responseCreate = await createWareHouse(warehouse);
    setLoading(false);
    if (responseCreate.success) {
      onClose();
      return toast({
        position: 'top',
        description: 'WareHouse created',
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
      <Button colorScheme='green' onClick={onOpen}>
        Create New WareHouse
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new WareHouse</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>WareHouse Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder='WareHouse Name'
                name='warehouseName'
                focusBorderColor='#32995b'
                value={warehouseName}
                onChange={updateNewWareHouseDetails}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Owner Name</FormLabel>
              <Input
                type='text'
                placeholder='Owner Name'
                name='OwnerName'
                focusBorderColor='#32995b'
                value={OwnerName}
                onChange={updateNewWareHouseDetails}
              />
          </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select City</FormLabel>
              <Select
                name='city'
                className='input sort-input'
                // bg={bg}
                // color={color}
                value={city}
                onChange={updateNewWareHouseDetails}
                placeholder='Select City'
              >
                {cities.map((item, index) => {
                  return (
                    <option key={index} value={item.isoCode}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select State</FormLabel>
              <Select
                name='state'
                className='input sort-input'
                // color={color}
                // bg={bg}
                value={state}
                onChange={updateNewWareHouseDetails}
                placeholder='Select State'
              >
                {states.map((item, index) => {
                  return (
                    <option key={index} value={item.stateCode}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select Country</FormLabel>
              <Select
                name='country'
                // color={color}
                className='input sort-input'
                // bg={bg}
                value={country}
                onChange={updateNewWareHouseDetails}
                placeholder='Select Country'
              >
                {countries.map((item, index) => {
                  return (
                    <option key={index} value={item.countryCode}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Street Address</FormLabel>
              <Input
                placeholder='Street Address'
                name='street'
                focusBorderColor='#32995b'
                value={street}
                onChange={updateNewWareHouseDetails}
              />
              <FormHelperText>Eg: street #: xyz</FormHelperText>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Company Name</FormLabel>
              <Input
                placeholder='Company'
                name='company'
                focusBorderColor='#32995b'
                value={company}
                onChange={updateNewWareHouseDetails}
              />
              <FormHelperText>Eg: Alexa Transport Company</FormHelperText>
            </FormControl>
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

export default CreateNewWareHouseModel;
