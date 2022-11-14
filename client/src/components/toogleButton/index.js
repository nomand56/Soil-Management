import { Switch, useColorMode,Button} from '@chakra-ui/react';
import { BsMoon,BsSun } from 'react-icons/bs';
import * as React from 'react';

export default function ToogleButton() {
  // const [value, setValue] = React.useState(false);
const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode} width="fit-content"  marginRight={2}>
    {colorMode === 'light' ?  <BsMoon/>: <BsSun/>}
  </Button>;
}
