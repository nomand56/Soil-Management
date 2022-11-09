import React from 'react';
import Wrapper from './styles';
import { services } from '../../utils/constants';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Services = () => {
  const bg = useColorModeValue('rgb(171, 122, 95)', 'rgb(171, 122, 95)');
    const color = useColorModeValue('rgb(40,40,40)', 'rgb(180,180,180)');

  return (
    <Wrapper >
      <Box  className='section-center'>
        <article className='header'>
          <Text fontSize='xl' color={color}>
            Your wish
            Our command
          </Text>
          <Text fontSize='md' color={color}>
            Customer satisfaction is the top-most priorty for Wear. It is
            the only the trust and support of our customers that we are now
            reaching greater heights.
          </Text>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <Box key={id} bg={bg} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <Text fontSize='sm' color={color}>{text}</Text>
              </Box>
            );
          })}
        </div>
      </Box>
    </Wrapper>
  );
};

export default Services;
