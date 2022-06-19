import React from 'react'
import Header from './components/Header';
import Rooter from './components/Rooter';
import Portal from './screen/Portal';

const Root = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Portal />
      <Rooter />
    </div>
  )
}

export default Root
