import { Flex } from '@chakra-ui/react'

const Letter = ({ isShow, letter }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="12"
      height="12"
      backgroundColor="gray.400"
      fontSize="3xl"
      fontWeight="bold"
      boxShadow="base"
      color="white"
    >
      {isShow && letter}
    </Flex>
  )
}
export default Letter
