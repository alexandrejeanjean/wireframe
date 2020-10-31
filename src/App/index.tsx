import React from 'react'
import styled from '@emotion/styled'

import Theme from '../Theme/index'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormScene from '../scenes/FormScene'

import './App.css'

const App = () => {
  return (
    <AppStyled className='App'>
      <Theme>
        <Header />
        <Main>
          <FormScene />
        </Main>
        <Footer />
      </Theme>
    </AppStyled>
  )
}

const AppStyled = styled('div')``

export default App
