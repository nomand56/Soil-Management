import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: '700px', xs: '80%' },
  bgcolor: 'background.paper',
  boxShadow: 50,
  display: { md: 'flex', xs: 'block' },
  justifyContent: 'space-arround',
};

export default function HomeModal({ state, setstate }) {
  const [filter, setfilter] = useState({ product: '', category: '' });
  const handleChange = (event, newValue) => {
    let name = event.target.name;
    let value = event.target.value;
    setfilter({ ...filter, [name]: value });
  };

  const handleSubmit = () => {
    console.log(filter);
  };

  return (
    <div>
      <Modal
        open={state}
        onClose={() => {
          setstate(!state);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            sx={{
              width: { md: '35%', xs: '100%' },
            }}
          >
            <img
              src='soil.jpg'
              style={{ width: '100%', height: '100%' }}
              alt='soil management'
            />
          </Box>
          <Box sx={{ width: { md: '70%', xs: '100%' } }}>
            <Box>
              <Box
                sx={{
                  backgroundColor: '#ab7a5f',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                }}
              >
                WELCOME TO GREEN BASE COMPANY
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{ color: 'rgba(150,150,150,0.9)', fontSize: '12px' }}
                >
                  APPLY FILTERS
                </Typography>
              </Box>
              <Box sx={{ width: '65%', margin: '10px auto' }}>
                <TextField
                  id='outlined-basic'
                  label='SEARCH PRODUCT'
                  name='product'
                  variant='outlined'
                  sx={{ width: '100%', margin: '10px 0px' }}
                  onChange={handleChange}
                />
                <FormControl fullWidth>
                  <InputLabel id='category'>CATEGORIES</InputLabel>
                  <Select
                    labelId='category'
                    id='demo-simple-select'
                    onChange={handleChange}
                    value={filter.category}
                    name='category'
                    label='CATAGORIES'
                    sx={{ margin: '10px 0px' }}
                    on
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{ color: 'rgba(150,150,150,0.9)', fontSize: '12px' }}
                  >
                    PRICE RANGE
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    name='price'
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  margin: '20px auto',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  variant='contained'
                  onClick={() => {
                    setstate(!state);
                  }}
                  sx={{ backgroundColor: '#ab7a5f' }}
                >
                  CANCEL
                </Button>
                <Button
                  variant='contained'
                  onClick={handleSubmit}
                  sx={{ backgroundColor: '#ab7a5f' }}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
