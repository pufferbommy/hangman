import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import hangmanGif from '../assets/hangman.gif'

const Start = ({ setIsStart }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray.100"
      height="100vh"
      gap="4"
    >
      <Heading as="h1">เกมแฮงแมน</Heading>
      <Box rounded="base" boxShadow="base" overflow="hidden" width="52" height="52">
        <Image width="full" height="full" src={hangmanGif} />
      </Box>
      <Button onClick={() => setIsStart(true)} colorScheme="blue">
        เริ่ม
      </Button>
    </Flex>
  )
}

export default Start
