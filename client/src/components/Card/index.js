import {Box,Image,Badge,Text,Button} from '@chakra-ui/react'
function FormCards({ ...props}) {

  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src="https://www.farmtek.com/wcsstore/EngineeringServices/allbizunits/prodimages/zoom/1x/pb01680r6cb.jpg" />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
             baths
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
          </Box>
  
          <Box>
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
    
        </Box>
      </Box>
    )
  }
export default FormCards