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
import { AiFillCaretDown } from 'react-icons/ai';
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
import { useProductsContext } from '../../context/products_context';
const HomePage = () => {
  const {setUserType}=useProductsContext()
  const [state, setstate] = useState(false);
  const [loading, setloading] = useState(false);
  const [steps, setsteps] = useState(1);
  const [data, setdata] = useState({
    type: '',
    land: '',
    jordType: '',
    Landomrade: '',
    Jordhoyde:'',
    postalCode: '',
  });
  console.log("data xxx",data)
  const color = useColorModeValue('rgb(40,40,40)', 'rgb(250,250,250)');
  const bg = useColorModeValue('rgb(250,250,250)', '#32995b');
  const [links, setlinks] = useState(['Hjem']);
  const {addType}=useProductsContext()
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
    setUserType(data.type)
   
    handleNext();
  }
  function calculateArea(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
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
    <main style={{ padding: '20px',maxWidth:"1200px",margin:"auto" }}>
      {/* <SeacrhBar /> */}
      <Box sx={{ padding: '2rem' }}>
        <Text fontSize='5xl' textAlign='center'>
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
                borderRadius: '5px',
                transform: 'translate(-42%,-220%)',
                height: '25px',
                width: '100px',
                position: 'relative',
              }}
            >
              {array[steps - 1]}
              <AiFillCaretDown
                style={{
                  color: 'green',
                  position: 'absolute',
                  transform: 'translate(170%,-23%)',
                  fontSize: '22px',
                }}
              />
            </SliderMark>
            <SliderTrack bg='green.800'>
              <SliderFilledTrack bg='green-600' />
            </SliderTrack>
            <SliderMark value={1}>
              <SliderThumb boxSize={10}>
                 <Box color='green'  />
              </SliderThumb>
            </SliderMark>
            <SliderMark value={2}>
              <SliderThumb boxSize={10}>
                 <Box color='green'  />
              </SliderThumb>
            </SliderMark>
            <SliderMark value={3}>
              <SliderThumb boxSize={10}>
                 <Box color='green'  />
              </SliderThumb>
            </SliderMark>
            <SliderMark value={4}>
              <SliderThumb boxSize={10}>
                 <Box color='green' />
              </SliderThumb>
            </SliderMark>
            <SliderMark value={5}>
              <SliderThumb boxSize={10}>
                 <Box color='green' >
                  
                 </Box>
              </SliderThumb>
            </SliderMark>
            <SliderMark value={10}>
              <SliderThumb boxSize={6}>
                 <Box color='green' backgroundColor="green"  />
              </SliderThumb>
            </SliderMark>
          </Slider>
        </Box>
      ) : null}

      {links.length !== 1 ? (
        <div
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}
        >
          {links.map((link, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '20px 5px',
                  color: 'green',
                }}
              >
                <button
                  style={{ margin: '0px 10px', color: 'green','&:hover': { background: '#00A300' }, }}
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
              {addType.map((m) => {
                return <Land m={m} setvalue={setvalue} />;
              })}
            </Box>
          ) : steps === 3 ? (
            <JordType setvalue={setvalue} />
          ) : steps === 4 ? (
            <AreaCalculate
              calculateArea={calculateArea}
              callNext={handleNext}
            />
          ) : steps === 5 ? (
            <PostalCode setvalue={setvalue} />
          ) : steps === 6 ? (
            <Result data={data} />
          ) : null}
        </Box>
      ) : (
        <Progress
          size='md'
          sx={{ margin: '100px', backgro: 'green.500' }}
          isIndeterminate
        />
      )}
    </main>
  );
};

export default HomePage;
