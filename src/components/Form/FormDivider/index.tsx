import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../../Theme/config'

import Text from '../../../ui/Text'
import Divider from '../../../ui/Divider'

const FormDivider = () => (
  <DividerStyled>
    <RowStyled>
      <ColumnStyled>
        <Divider />
      </ColumnStyled>
      <Text text='ou' fontSize={Theme.default.fontSize.medium} />
      <ColumnStyled>
        <Divider />
      </ColumnStyled>
    </RowStyled>
  </DividerStyled>
)

const DividerStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;
`

const RowStyled = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ColumnStyled = styled('div')`
  width: 285px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default FormDivider
