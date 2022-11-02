import React, { useState } from 'react';
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { HeroImg,ButtonProps,ActiveButtonProps } from './styles';
import HomeModal from '../Modal';
// import heroBcg2 from '../../assets/hero-bcg-2.jpeg';

const Hero = () => {
  let [state, setstate] = useState({ customerType: '',know:'', for: '', index: 1,postalcode:'',quantity:'', })
  let [open ,setopen] = useState(false)
  function handleClick(e) {
  setstate({...state,[e.target.name]:e.target.value})
  }
  function handleChange(e) {
     setstate({ ...state, [e.target.name]: e.target.value });
  }
  function handleSubmit()
  {
    console.log(state)
    setopen(true)
  }
  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: { xs: 'auto', md: '90vh' },
        textAlign: { md: 'left', xs: 'center' },
      }}
    >
      <Grid item xs={12} md={5}>
        <img src='./soil.jpg' alt='soil-management' style={HeroImg} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Box>
          <Typography
            variant='h4'
            sx={{ color: '#ab7a5f', fontWeight: 'bold' }}
          >
            Quality Soil For Your Garden
          </Typography>
          <Typography>
            Green Waste Company is commited to provide you best quality soil for
            you needs at you door step.
          </Typography>
          <Typography sx={{ color: 'gray', fontSize: '10px' }}>
            Apply Filters
          </Typography>
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
              <Typography sx={{ fontSize: '10px', color: 'gray' }}>
                Do You Know What To Buy.
              </Typography>
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
              <Typography sx={{ fontSize: '10px', color: 'gray' }}>
                Soil For.
              </Typography>
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
              <Typography sx={{ fontSize: '10px', color: 'gray' }}>
                Choose Quantity.
              </Typography>
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
              <Typography>Enter postal code</Typography>
              <TextField
                name='postalcode'
                onChange={handleChange}
                sx={{ width: '100%' }}
              />
            </Box>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'space-between',margin:'20px 0px' }}>
            <Button
              variant='contained'
              disabled={state.index === 1 ? true : false}
              onClick={() => {
                setstate({ ...state, index: state.index - 1 });
              }}
            >
              Previous
            </Button>
            {state.index < 5 ? (
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
      </Grid>
      {open === true ? (
        <HomeModal open={open} setopen={setopen} state={state} />
      ) : null}
    </Grid>
  );
};

export default Hero;
