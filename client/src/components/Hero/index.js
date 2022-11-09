import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { HeroImg, ButtonProps, ActiveButtonProps } from './styles';
import HomeModal from '../Modal';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useProductsContext } from '../../context/products_context';
import { PreLoader } from '../../Admin/components';
import { margin } from '@mui/system';
// import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  let [state, setstate] = useState({
    customerType: '',
    know: '',
    for: '',
    soil: '',
    index: 1,
    postalCode: '',
    quantity: '',
  });
  let [open, setopen] = useState(false);
  const { filtered_products_loading: loading } = useProductsContext();
  function handleClick(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }
  function handleChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    console.log(state);
    setopen(true);
  }

  return (
    <Box
      sx={{
        display: { md: 'flex', xs: 'block' },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        margin: '20px auto',
      }}
    >
      <Box>
        <Box>
          <h1
            style={{
              color: '#ab7a5f',
              fontWeight: 'bold',
              fontSize: '30px',
              wordSpacing: '1px',
              margin: '5px 0px',
            }}
          >
            Quality Soil For Your Garden
          </h1>
          <h4 style={{ margin: '5px 0px' }}>
            Green Waste Company is commited to provide you best quality soil for
            you needs at you door step.
          </h4>
          <h6 style={{ color: 'gray', fontSize: '10px' }}>Apply Filters</h6>
          {state.index === 1 ? (
            <Box sx={{ margin: '20px auto' }}>
              <Button
                sx={
                  state.customerType === 'professional'
                    ? ActiveButtonProps
                    : ButtonProps
                }
                name='customerType'
                value='professional'
                onClick={handleClick}
              >
                Professional
              </Button>
              <Button
                sx={
                  state.customerType === 'private'
                    ? ActiveButtonProps
                    : ButtonProps
                }
                name='customerType'
                value='private'
                onClick={handleClick}
              >
                Private
              </Button>
            </Box>
          ) : state.index === 2 ? (
            <Box>
              <h6 style={{ fontSize: '10px', color: 'gray' }}>
                Do You Know What To Buy.
              </h6>
              <Button
                sx={state.know === 'yes' ? ActiveButtonProps : ButtonProps}
                name='know'
                value='yes'
                onClick={handleClick}
              >
                I Know
              </Button>
              <Button
                sx={state.know === 'no' ? ActiveButtonProps : ButtonProps}
                name='know'
                value='no'
                onClick={handleClick}
              >
                I Don't Know
              </Button>
            </Box>
          ) : state.index === 3 ? (
            <Box>
              <h6 style={{ fontSize: '10px', color: 'gray' }}>Soil For.</h6>
              <Button
                sx={
                  state.for === 'homegardning' ? ActiveButtonProps : ButtonProps
                }
                name='for'
                value='homegardning'
                onClick={handleClick}
              >
                Home Gardening
              </Button>
              <Button
                sx={state.for === 'vegetable' ? ActiveButtonProps : ButtonProps}
                name='for'
                value='vegetable'
                onClick={handleClick}
              >
                Vegetables
              </Button>
              <Button
                sx={state.for === 'flowers' ? ActiveButtonProps : ButtonProps}
                name='for'
                value='flowers'
                onClick={handleClick}
              >
                Flowers
              </Button>
              <Button
                sx={state.for === 'grass' ? ActiveButtonProps : ButtonProps}
                name='for'
                value='grass'
                onClick={handleClick}
              >
                Grass
              </Button>
              <Button
                sx={state.for === 'trees' ? ActiveButtonProps : ButtonProps}
                name='for'
                value='trees'
                onClick={handleClick}
              >
                Trees
              </Button>
              <Button
                sx={state.for === 'plants' ? ActiveButtonProps : ButtonProps}
                name='for'
                value='plants'
                onClick={handleClick}
              >
                Plants
              </Button>
            </Box>
          ) : state.index === 4 ? (
            <Box>
              <h6 sx={{ fontSize: '10px', color: 'gray' }}>Mineral Type</h6>
              <Button
                sx={
                  state.soil === 'High Mineral'
                    ? ActiveButtonProps
                    : ButtonProps
                }
                name='soil'
                value='High Mineral'
                onClick={handleClick}
              >
                High Mineral
              </Button>
              <Button
                sx={
                  state.soil === 'Low Mineral' ? ActiveButtonProps : ButtonProps
                }
                name='soil'
                value='Low Mineral'
                onClick={handleClick}
              >
                Low Mineral
              </Button>
            </Box>
          ) : state.index === 5 ? (
            <Box>
              <h6 sx={{ fontSize: '10px', color: 'gray' }}>Choose Quantity.</h6>
              <Button
                sx={state.quantity === 'bags' ? ActiveButtonProps : ButtonProps}
                name='quantity'
                value='bags'
                onClick={handleClick}
              >
                Bags
              </Button>
              <Button
                sx={state.quantity === 'm3' ? ActiveButtonProps : ButtonProps}
                name='quantity'
                value='m3'
                onClick={handleClick}
              >
                M-3
              </Button>
            </Box>
          ) : (
            <Box sx={{ margin: '20px 0px' }}>
              <h6>Enter postal code</h6>
              <input
                name='postalCode'
                onChange={handleChange}
                placeholder='Enter Postal Code'
                style={{
                  width: '100%',
                  padding: '20px',
                  border: 'none',
                  background: 'transparent',
                }}
              />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px 0px',
            }}
          >
            <Button
              variant='contained'
              disabled={state.index === 1 ? true : false}
              onClick={() => {
                setstate({ ...state, index: state.index - 1 });
              }}
            >
              Previous
            </Button>
            {state.index < 6 ? (
              <Button
                variant='contained'
                onClick={() => {
                  setstate({ ...state, index: state.index + 1 });
                }}
              >
                Next
              </Button>
            ) : (
              <Button variant='contained' onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', marginRight: '20px', width:"15rem" }}>
        <Box>
          <h4>Product Details</h4>
        
<Box sx={{border: '1px solid ' ,margin:"6px" , borderRadius:"10px"}}>

          <Box sx={{padding:"20px", }}>
           <b>Service</b>  : {state.for} 
          </Box>
          <Box sx={{padding:"20px",}}>
            <b>Soil</b> :{state.soil}
          </Box>
          <Box sx={{padding:"20px",}}>
            <b>Quantity</b> :{state.quantity}
          </Box>
</Box>
          
        </Box>
      </Box>
      {open === true ? (
        <HomeModal open={open} setopen={setopen} state={state} />
      ) : null}
    </Box>
  );
};

export default Hero;
