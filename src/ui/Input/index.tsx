/* @flow */
import React from 'react'
import styled from '@emotion/styled'

import Label from './Label'
import Input from './Input'

export interface IProps {
  placeholder: string
  type: string
  name: string
  labelText: string
  handleChange: Function
}

const InputWrapper = (props: IProps) => {
  const { placeholder, type, name, labelText, handleChange } = props
  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange && handleChange(event)

  return (
    <InputWrapperStyled type={type}>
      <Label labelText={labelText} type={type}>
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            _handleChange(e)
          }
        />
      </Label>
    </InputWrapperStyled>
  )
}

type InputWrapperProps = {
  type: string
}

const InputWrapperStyled = styled('div')`
  width: ${(props: InputWrapperProps) =>
    props.type && props.type === 'checkbox' ? '100%' : '270px'};
  height: ${(props: InputWrapperProps) =>
    props.type && props.type === 'checkbox' ? '10px' : '50px'};
  display: ${(props: InputWrapperProps) =>
    props.type && props.type === 'checkbox' ? 'flex' : 'block'};
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`

export default InputWrapper
