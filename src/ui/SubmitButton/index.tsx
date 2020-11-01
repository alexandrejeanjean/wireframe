import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../Theme/config'
import Text from '../Text'

export interface IProps {
  value: string
  disabled: boolean
}
const SubmitButton = (props: IProps) => {
  const { value, disabled } = props
  return (
    <SubmitButtonStyled type='submit' disabled={disabled}>
      <Text fontSize={Theme.default.fontSize.default} text={value} />
    </SubmitButtonStyled>
  )
}

const SubmitButtonStyled = styled('button')`
  width: 179px;
  height: 38px;
  margin-top: 2rem;
  margin-bottom: 0.4rem;
  background: ${Theme.default.buttons.submitButton};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: ease 0.2s all;
  &:hover {
    transform: translate(0, -0.1rem);
  }
`

export default SubmitButton
