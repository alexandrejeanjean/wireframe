import React from 'react'
import styled from '@emotion/styled'

import Text from '../../../ui/Text'
import Theme from '../../../Theme/config'
import BackButton from '../../../ui/BackButton'

const FormHeader = () => (
  <HeaderStyled>
    <BackButton />
    <Text
      fontSize={Theme.default.fontSize.heading.h1}
      fontWeight={Theme.default.fontWeight.bold}
      color={Theme.default.color}
      text='Inscription'
    />
  </HeaderStyled>
)

const HeaderStyled = styled('header')`
  width: 580px;
  margin: 2rem auto;
  position: relative;
`

export default FormHeader
