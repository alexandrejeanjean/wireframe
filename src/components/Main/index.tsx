import React from 'react'
import styled from '@emotion/styled'

type TMain = {
  children: React.ReactNode
}

const Main = ({ children }: TMain) => {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled('main')`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Main
