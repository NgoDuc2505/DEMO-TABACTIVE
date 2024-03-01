
import { useState } from 'react'
import Content from './components/Content'
import Detail from './components/Detail'

function App() {
  const initState = [false,true,false];
  const [listActive,setListActive] = useState(initState);
  return (
    <>
      <Content listActive={listActive} setListActive={setListActive} ></Content>
      <Detail listActive={listActive}></Detail>
    </>
  )
}

export default App
