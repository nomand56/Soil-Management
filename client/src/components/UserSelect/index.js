import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Text } from '@chakra-ui/react';
import Wrapper from './style';
import img1 from '../../assets/homegarden.jpg';
function UserSelect({setvalue}) {
  return (
    <div>
      <Wrapper>
        <Box
          sx={{ backgroundImage: `url(${img1})`, backgroundPosition: 'center' ,margin:'20px 0px'}}
          className='img_box'
        >
          <Box className='box_p'>
            <Text>Proffkunde?</Text>
            <Box width='50%'>
              <Text fontSize='sm' textAlign='center'>
                {' '}
                Vi har jord til anleggsgartnere og entrepenerer
              </Text>
            </Box>
            <Button
              name='type'
              value='proffkunder'
              onClick={setvalue}
              sx={{ fontSize: 'small', background: 'green' }}
            >
              JORD TIL PROFFKUNDER
            </Button>
          </Box>
        </Box>
        <Text fontSize='xl' sx={{fontWeight:'bold'}} >Eller</Text>
        <Box
          sx={{
            backgroundImage: `url(https://www.farmtek.com/wcsstore/EngineeringServices/allbizunits/prodimages/zoom/1x/pb01680r6cb.jpg)`,
            backgroundPosition: 'center',
          }}
          className='img_box'
        >
          <Box className='box_p'>
            <Text>Privatkunde?</Text>
            <Box width='50%'>
              <Text fontSize='sm' textAlign='center'>
                Vi har tomt for Privatkunder
              </Text>
            </Box>
            <Button
              name='type'
              value='privatkunder'
              onClick={setvalue}
              sx={{ fontSize: 'small', background: 'green' }}
            >
              JORD TIL PRIVATKUNDER
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </div>
  );
}

export default UserSelect;
