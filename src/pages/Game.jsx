import { Box, Flex } from '@chakra-ui/react'
import Keyboard from '../components/Keyboard'
import Letter from '../components/Letter'

const Game = () => {
  const targetWord = 'แมว'

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
      height="100vh"
    >
      <Box
        backgroundImage="url('/src/assets/man.png')"
        width="10rem"
        height="20rem"
        border="1px"
        // -114 -299 -481 -662 -847 -1033 -1212
        backgroundPosition="-114px -12px"
        backgroundSize="1450px"
        backgroundRepeat="no-repeat"
        marginBottom="10"
      />
      <Flex justifyContent="center" gap="2">
        {targetWord.split('').map((letter, index) => (
          <Letter isShow={false} key={index} letter={letter} />
        ))}
      </Flex>
      <Keyboard />
    </Flex>
  )
}
export default Game
