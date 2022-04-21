import Start from './pages/Start'
import { useState } from 'react'
import Game from './pages/Game'

const App = () => {
  const [isStart, setIsStart] = useState(false)

  return (
    <>
      {!isStart && <Start setIsStart={setIsStart} />}
      {isStart && <Game setIsStart={setIsStart} />}
    </>
  )
}
export default App
