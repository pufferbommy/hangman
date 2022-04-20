import { Flex } from '@chakra-ui/react'

const Key = ({ keyVal }) => {
  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      rounded="base"
      cursor="pointer"
      boxShadow="base"
      backgroundColor="gray.500"
      width="12"
      height="12"
      fontWeight="bold"
      fontSize="xl"
      transition="background color"
      transitionDuration="300ms"
      _hover={{ backgroundColor: 'gray.400' }}
    >
      {keyVal}
    </Flex>
  )
}
export default Key
