import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import Wrapper from './style'
import img1 from "../../assets/homegarden.jpg"
function UserSelect() {
    return (
        <div>
            <Wrapper>
                <Box sx={{ backgroundImage: `url(${img1})`, backgroundPosition: "center" }} className='img_box'>

                    <Box className='box_p'>
                        <Text>Proffkunde?</Text>
                        <Box width="50%">

                        <Text fontSize="sm" textAlign="center">  Vi har jord til anleggsgartnere og entrepenerer</Text>
                        </Box>
                        <Button sx={{fontSize:"small"}}>JORD TIL PROFFKUNDER</Button>

                    </Box>
                </Box>
                <Box>
                    <Text fontSize="2xl">ELLE</Text>
                </Box>
                <Box sx={{ backgroundImage: `url(https://www.farmtek.com/wcsstore/EngineeringServices/allbizunits/prodimages/zoom/1x/pb01680r6cb.jpg)`, backgroundPosition: "center" }} className='img_box'>

<Box className='box_p'>
    <Text>Privatkunde?</Text>
    <Box width="50%">

    <Text fontSize="sm" textAlign="center">  Vi har tomt for Privatkunder</Text>
    </Box>
    <Button sx={{fontSize:"small"}}>JORD TIL PRIVATKUNDER</Button>

</Box>
</Box>
            </Wrapper>



        </div>
    )
}

export default UserSelect