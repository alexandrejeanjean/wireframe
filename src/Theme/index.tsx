import React from 'react'
import styled from '@emotion/styled'

type TTheme = {
  children: React.ReactNode
}

const Theme = ({ children }: TTheme) => {
  return <ThemeStyled>{children}</ThemeStyled>
}

const ThemeStyled = styled('div')``

export default Theme
