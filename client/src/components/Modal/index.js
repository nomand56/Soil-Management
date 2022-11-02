import React, { useState, useEffect, useContext } from 'react';
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
import { useProductsContext } from '../../context/products_context';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: '80%', xs: '80%' },
  bgcolor: 'background.paper',
  boxShadow: 50,
  display: { md: 'flex', xs: 'block' },
  justifyContent: 'space-arround',
};

export default function HomeModal({ open,setopen,state }) {
let [data,setdata] = useState([])
  
  useEffect(() => {
  filterData()
  }, [])
  
  function filterData()
  {
    axios.post('api/v1/product/filterProducts', state).then((res) => {
      console.log(res.data)
    })
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setopen(!open);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
        {JSON.stringify(state)}
        </Box>
              </Modal>
    </div>
  );
}
