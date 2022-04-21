import { Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { GameContext } from '../pages/Game'

const Key = ({ keyVal }) => {
  const { targetWordArray, selectedLetters, setSelectedLetters } =
    useContext(GameContext)
  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      rounded="base"
      cursor="pointer"
      boxShadow="base"
      backgroundColor={`${
        selectedLetters.includes(keyVal) && targetWordArray.includes(keyVal)
          ? 'green.500'
          : selectedLetters.includes(keyVal) && !targetWordArray.includes(keyVal)
          ? 'gray.400'
          : 'gray.500'
      }`}
      width="12"
      height="12"
      fontWeight="bold"
      fontSize="xl"
      transition="background color"
      transitionDuration="300ms"
      _hover={{
        backgroundColor: `${
          selectedLetters.includes(keyVal) && targetWordArray.includes(keyVal)
            ? 'green.400'
            : 'gray.400'
        }`,
      }}
      onClick={() => {
        if (selectedLetters.some((letter) => letter === keyVal)) return
        setSelectedLetters((prev) => [...prev, keyVal])
      }}
    >
      {keyVal}
    </Flex>
  )
}
export default Key
