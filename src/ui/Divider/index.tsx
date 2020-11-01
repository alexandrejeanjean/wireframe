import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../Theme/config'

const Divider = () => {
  return <DividerStyled></DividerStyled>
}

const DividerStyled = styled('div')`
  width: 270px;
  height: 1px;
  background: ${Theme.default.color};
`

export default Divider
