import {
  Box,
  Divider,
  Progress,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  SeacrhBar,
  UserSelect,
} from '../../components';
import AreaCalculate from '../../components/AreaCalculate/AreaCalculate';
import FilterDetailCard from '../../components/filterDetails/filterDetailCard';
import JordType from '../../components/JordType/JordType';
import PostalCode from '../../components/PostalCode/PostalCode';
import Result from '../../components/Result/Result';
import Land from '../../components/stepper';
import { landData } from '../../utils/land';

const HomePage = () => {
  const [state, setstate] = useState(false);
  const [loading, setloading] = useState(false);
  const [steps, setsteps] = useState(1);
  const [data, setdata] = useState({
    type: '',
    land: '',
    jordType: '',
    Landområde: '',
    Jordhøyde:'',
    postalCode: '',
  });
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  const [links, setlinks] = useState(['Hjem']);
  const array = [
    'Hjem',
    'Jordvalg',
    'Jordtype',
    'velg mengde',
    'velg postnr',
    'sjekk ut',
  ];
  function setvalue(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
   
    callNext();
  }
  function calculateArea(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  function callNext() {
     setloading(true);
    setTimeout(() => {
      handleNext();
    }, 1000);
  }
  function handleNext() {
    setloading(false);
    setsteps((step) => step + 1);
    console.log(data);
    setlinks([...links, array[steps]]);
  }


  function handleClick(step) {
    setsteps(step);
    let link = links;
    link = link.slice(0, step);
    setlinks(link);
  }
  return (
    <main style={{ padding: '50px' }}>
      <SeacrhBar />
      <Box sx={{ padding: '3rem' }}>
        <Text fontSize='4xl' textAlign='center'>
          {steps === 1
            ? 'Kjøp kompostbasert kvalitetsjord hos oss!'
            : array[steps - 1]}
        </Text>
      </Box>
      {steps !== 1 ? (
        <Box style={{ width: '80%', margin: '10px auto' }}>
          <Slider
            aria-label='slider-ex-4'
            value={steps}
            max={6}
            step={1}
            min={1}
            isReadOnly
            onChange={(e) => {
              setsteps(e);
            }}
          >
            <SliderMark
              value={steps}
              textAlign='center'
              bg='green.500'
              color='white'
              sx={{
                padding: '3px 4px',
                borderRadius: '5px',
                transform: 'translate(-50%,-150%)',
              }}
            >
              {array[steps - 1]}
            </SliderMark>
            <SliderTrack bg='green.800'>
              <SliderFilledTrack bg='green-600' />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color='green' as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
        </Box>
      ) : null}

      {links.length !== 1 ? (
        <div style={{ display: 'flex', alignItems: 'center',flexWrap:'wrap' }}>
          {links.map((link, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '20px 5px',
                }}
              >
                <button
                  style={{ margin: '0px 10px' }}
                  onClick={() => {
                    handleClick(index + 1);
                  }}
                >
                  {link}
                </button>
                /
              </div>
            );
          })}
        </div>
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
                width: 'fit-content',
              }}
            >
              {landData.map((m) => {
                return <Land m={m} setvalue={setvalue} />;
              })}
            </Box>
          ) : steps === 3 ? (
            <JordType setvalue={setvalue} />
          ) : steps === 4 ? (
            <AreaCalculate calculateArea={calculateArea} callNext={callNext} />
          ) : steps === 5 ? (
            <PostalCode setvalue={setvalue} />
          ) : steps === 6 ? (
            <Result data={data} />
          ) : null}
        </Box>
      ) : (
        <Progress size='md' sx={{ margin: '100px' }} isIndeterminate />
      )}
    </main>
  );
};

export default HomePage;
