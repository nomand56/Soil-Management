import { Switch, useColorMode } from '@chakra-ui/react';
import * as React from 'react';

export default function ToogleButton() {
  // const [value, setValue] = React.useState(false);
const { colorMode, toggleColorMode } = useColorMode();

  return <Switch onChange={toggleColorMode} size='md' />;
}
