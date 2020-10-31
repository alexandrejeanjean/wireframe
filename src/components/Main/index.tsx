import React from 'react'
import styled from '@emotion/styled'

type TMain = {
  children: React.ReactNode
}

const Main = ({ children }: TMain) => {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled('main')``

export default Main
