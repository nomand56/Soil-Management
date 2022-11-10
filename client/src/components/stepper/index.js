import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import FormCards from '../Card';
const content = (
  <Flex py={4}>
    <Text> Lorem ipsum data dummu</Text>
  </Flex>
);
const ReactFragment = () => {
    return <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"}}>

    < FormCards />

    < FormCards />

     </Box>
}
const steps = [
  { label: 'Step 1', ReactFragment },
  { label: 'Step 2', ReactFragment },
  { label: 'Step 3', ReactFragment },
];
 const Stepper = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map((item) => (
          <Step label={item.label} key={item.label}>
      
           <item.ReactFragment />   




          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
export default Stepper;