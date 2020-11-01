import React from 'react'
import styled from '@emotion/styled'

import Theme from '../Theme/index'
import Main from '../components/Main'

import FormScene from '../scenes/FormScene'

import './App.css'

const App = () => {
  return (
    <AppStyled className='App'>
      <Theme>
        <Main>
          <FormScene />
        </Main>
      </Theme>
    </AppStyled>
  )
}

const AppStyled = styled('div')``

export default App
