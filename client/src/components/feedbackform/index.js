import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductsContext } from '../../context/products_context';

const FeedBack = ({ obj }) => {
    const [values, setvalues] = useState({})
     const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(255,255,250)', 'rgb(40,40,40)');
  const { InquiryForm } = useProductsContext();
    function handleChange(e)
    {
        setvalues({...values,[e.target.name]:e.target.value})
    }
    function handleSubmit(e)
    {
      e.preventDefault()
      const newObj = {
        ...values,
        productDetails: {
          Jordhoyde: obj.Jordhoyde,
          Landomrade: obj.Landomrade,
          JordType: obj.jordType,
          land: obj.land,
          postalCode: obj.postalCode,
          type: obj.type,
        },
      };
        InquiryForm(newObj)
    }
  return (
    <Box
      className='feedbackcontainer'
    >
      <Text fontSize='xl' sx={{ textAlign: 'left' }}>
        kontaktopplysninger
      </Text>
      <Text fontSize='md' sx={{ margin: '20px 0px', textAlign: 'left' }}>
        Vennligst legg til din adresse
      </Text>
      <form style={{ margin: '40px 0%' }}>
        <input
          style={{ color: color, background: bg }}
          placeholder='Navn...'
          name='name'
          required
          className='halfinputform'
          onChange={handleChange}
        />
        <Box className='inputformcontainer'>
          <input
            style={{ color: color, background: bg }}
            onChange={handleChange}
            placeholder='Ph.Nr...'
                      name='phone'
                      required
            className='inputform'
          />
          <input
            style={{ color: color, background: bg }}
            placeholder='E-post...'
                      name='E-post'
                      required
            onChange={handleChange}
            className='inputform'
          />
        </Box>
        <input
          style={{ color: color, background: bg }}
          placeholder='Levende adresse...'
          name='address'
          onChange={handleChange}
          required
          className='addressinputform'
        />
        <Box className='inputformcontainer'>
          <input
            style={{ color: color, background: bg }}
            placeholder='Post.Nr'
            name='postal'
            className='inputform'
            onChange={handleChange}
          />
          <input
            style={{ color: color, background: bg }}
            placeholder='Statsnr'
            name='street'
                      className='inputform'
                      required
            onChange={handleChange}
          />
        </Box>
        <Button
          type='submit'
          onClick={handleSubmit}
          sx={{
            textAlign: 'center',
            background: 'green',
            width: '50%',
            padding: '10px',
            color: 'white',
            margin: '10px 0px',
            '&:hover': { background: '#00A300' },
          }}
        >
          Sende inn
        </Button>
      </form>
    </Box>
  );
}

export default FeedBack