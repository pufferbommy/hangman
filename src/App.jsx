import Start from './pages/Start'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Game from './pages/Game'

const App = () => {
  const [isStart, setIsStart] = useState(false)

  return (
    <>
      {!isStart && <Start setIsStart={setIsStart} />}
      {isStart && <Game />}
    </>
  )
}
export default App
