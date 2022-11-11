import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { Text } from '@chakra-ui/react';
import Wrapper from './style';
import img1 from '../../assets/homegarden.jpg';
function JordType({ setvalue }) {
  return (
    <div>
      <Wrapper>
        <Box
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'center',
            margin: '20px 0px',
          }}
          className='img_box'
        >
          <Box className='box_p'>
            <Text>Høyt Mineral</Text>
            <Box width='80%'>
              <Text fontSize='sm' textAlign='center'>
                Et flott produkt til alle hageprosjekter. Vår anbefaling for
                kjøkkenhage.
              </Text>
            </Box>
            <Button
              name='jordType'
              value='highmineral'
              onClick={setvalue}
              sx={{ fontSize: 'small', background: 'green' }}
            >
              Les mer om Høyt Mineral
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(https://www.farmtek.com/wcsstore/EngineeringServices/allbizunits/prodimages/zoom/1x/pb01680r6cb.jpg)`,
            backgroundPosition: 'center',
          }}
          className='img_box'
        >
          <Box className='box_p'>
            <Text>Lite Mineral</Text>
            <Box width='80%'>
              <Text fontSize='sm' textAlign='center'>
                Stabil og næringsrik jord til alt unntatt grønnsaker, frukt og
                bær. Vår anbefaling til plen og ferdigplen.
              </Text>
            </Box>
            <Button
              name='jordType'
              value='litemineral'
              onClick={setvalue}
              sx={{ fontSize: 'small', background: 'green' }}
            >
              Les mer om Lite Mineral
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </div>
  );
}

export default JordType;
