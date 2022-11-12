import React from 'react'
import { Input,Select,Box, Text} from '@chakra-ui/react'
import Wrapper from './style'
function SeacrhBar() {
  return (
    <div>
        <Wrapper>

        <Box className='search-box'>

        <Input placeholder="Search" />
        <Select placeholder='Select option' className='select'>
  <option value='option1'>Service</option>
  <option value='option2'>Mineral</option>
  <option value='option3'>Area</option>
</Select>
        </Box>

        
        </Wrapper>


    </div>
  )
}

export default SeacrhBar