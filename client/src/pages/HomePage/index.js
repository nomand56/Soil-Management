import { Box, Divider, Progress, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';
import { FeaturedProducts, Hero, Services, Contact, SeacrhBar ,UserSelect} from '../../components';
import AreaCalculate from '../../components/AreaCalculate/AreaCalculate';
import FilterDetailCard from '../../components/filterDetails/filterDetailCard';
import JordType from '../../components/JordType/JordType';
import Land from '../../components/stepper';
import { landData } from '../../utils/land';

const HomePage = () => {
  const [state, setstate] = useState(false)
  const [loading,setloading]=useState(false)
  const [steps, setsteps] = useState(1)
  const [data, setdata] = useState({ type: '', land: '', jordType: '', quantity: 0, postalCode: '' })
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');  
  const bg = useColorModeValue('rgb(250,250,250)','#32995b');  

  function setvalue(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
    setloading(true)
    callNext()
  }
  function callNext()
  {
   setTimeout(() => {
     handleNext();
   }, 3000);
  }
  function handleNext() {
    setloading(false)
    setsteps((step) => step + 1)
    console.log(data)
  }
  function handlePrevious() {
    setsteps((step) => step + 1)
  }
  function handleSubmit()
  {
    console.log(data)
  }
  return (
    <main style={{padding:'50px'}}>
      <SeacrhBar />
      {steps !== 1 ? (
        <Box style={{ width: '80%', margin: '10px auto' }}>
          <Slider
            aria-label='slider-ex-4'
            value={steps}
            max={7}
            step={1}
            min={0}
            onChange={(e) => {
              setsteps(e);
            }}
          >
            <SliderMark
          value={steps}
          textAlign='center'
          bg='green.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {steps}
        </SliderMark>
            <SliderTrack bg='red.100'>
              <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color='tomato' as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
        </Box>
      ) : null}
      {loading === false ? (
        <Box>
          {steps === 1 ? (
            <UserSelect setvalue={setvalue} handleNext={handleNext} />
          ) : steps === 2 ? (
            <Box
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                  flexWrap: 'wrap',
                  gap: '50px',
                width:'fit-content'
              }}
            >

                {
                  landData.map((m) => {
                    return <Land m={m} setvalue={setvalue} />
                  })
                }

            </Box>
          ) : steps===3?<JordType setvalue={setvalue} handleSubmit={handleSubmit} />:steps===4?<AreaCalculate setvalue={setvalue} />:null}
        </Box>
      ) : (
        <Progress size='md' sx={{margin:'100px'}} isIndeterminate />
      )}
    </main>
  );
};

export default HomePage;
