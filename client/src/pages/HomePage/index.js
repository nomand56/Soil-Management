import { Box, Divider, Progress, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';
import { FeaturedProducts, Hero, Services, Contact, SeacrhBar ,UserSelect} from '../../components';
import FilterDetailCard from '../../components/filterDetails/filterDetailCard';
import Land from '../../components/stepper';

const HomePage = () => {
  const [state, setstate] = useState(false)
  const [loading,setloading]=useState(false)
  const [steps, setsteps] = useState(0)
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
    <main>
      <SeacrhBar />
      {steps !== 0 ? (
        <Box style={{ width: '80%', margin: '10px auto' }}>
          <Slider
            aria-label='slider-ex-4'
            defaultValue={steps}
            max={7}
            step={1}
            min={0}
            onChange={(e) => {
              setsteps(e);
            }}
          >
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
          {steps === 0 ? (
            <UserSelect setvalue={setvalue} handleNext={handleNext} />
          ) : steps === 1 ? (
            <Box
              style={{
                padding: '50px',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Box>
                <Land />
              </Box>
              <Box>
                <FilterDetailCard data={data} />
              </Box>
            </Box>
          ) : null}
        </Box>
      ) : (
        <Progress size='md' isIndeterminate />
      )}
    </main>
  );
};

export default HomePage;
