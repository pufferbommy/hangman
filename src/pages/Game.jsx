import { Box, Flex } from '@chakra-ui/react'
import { useState, createContext, useEffect, useMemo } from 'react'
import Keyboard from '../components/Keyboard'
import Letter from '../components/Letter'

export const GameContext = createContext()

const words = ['นก', 'คน', 'รวย', 'ลวก', 'บอม']

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const bgPositionArray = [-114, -299, -481, -662, -847, -1033, -1212]

const Game = ({ setIsStart }) => {
  const targetWordArray = useMemo(() => {
    return words[random(0, words.length - 1)].split('')
  }, [])
  const [selectedLetters, setSelectedLetters] = useState([])
  const [bgPositionIdx, setBgPositionIdx] = useState(0)

  useEffect(() => {
    if (targetWordArray.every((letter) => selectedLetters.includes(letter))) {
      setTimeout(() => {
        alert('You are won!!!')
        setSelectedLetters([])
        setBgPositionIdx(0)
        setIsStart(false)
      }, 500)
    }

    if (bgPositionIdx === bgPositionArray.length - 2) {
      setTimeout(() => {
        alert('Game over!!!')
        setSelectedLetters([])
        setBgPositionIdx(0)
        setIsStart(false)
      }, 500)
    }

    if (selectedLetters.length > 0) {
      const hasCharacterInTargetWord = targetWordArray.includes(
        selectedLetters[selectedLetters.length - 1],
      )

      if (!hasCharacterInTargetWord) {
        setBgPositionIdx((prev) => prev + 1)
      }
    }
  }, [selectedLetters])

  return (
    <GameContext.Provider
      value={{ targetWordArray, selectedLetters, setSelectedLetters }}
    >
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
          backgroundPosition={`${bgPositionArray[bgPositionIdx]}px -12px`}
          backgroundSize="1450px"
          backgroundRepeat="no-repeat"
          marginBottom="10"
        />
        <Flex justifyContent="center" gap="2">
          {targetWordArray.map((letter, index) => (
            <Letter
              isShow={
                selectedLetters.includes(letter) && targetWordArray.includes(letter)
              }
              key={index}
              letter={letter}
            />
          ))}
        </Flex>
        <Keyboard />
      </Flex>
    </GameContext.Provider>
  )
}
export default Game
