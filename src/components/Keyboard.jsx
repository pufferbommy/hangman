import { Flex } from '@chakra-ui/react'
import Key from './Key'

const Keyboard = () => {
  const row1 = ['ก', 'ข', 'ค', 'ฆ', ' ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ']
  const row2 = ['ญ', 'ฎ', 'ฏ', 'ฐ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท']
  const row3 = ['ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม']
  const row4 = ['ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ']

  return (
    <Flex alignItems="center" marginTop="10" flexDirection="column" gap={2}>
      <Flex gap="2">
        {row1.map((keyVal, index) => (
          <Key key={index} keyVal={keyVal} />
        ))}
      </Flex>
      <Flex gap="2">
        {row2.map((keyVal, index) => (
          <Key key={index} keyVal={keyVal} />
        ))}
      </Flex>
      <Flex gap="2">
        {row3.map((keyVal, index) => (
          <Key key={index} keyVal={keyVal} />
        ))}
      </Flex>
      <Flex gap="2">
        {row4.map((keyVal, index) => (
          <Key key={index} keyVal={keyVal} />
        ))}
      </Flex>
    </Flex>
  )
}
export default Keyboard
