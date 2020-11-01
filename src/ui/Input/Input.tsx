/* @flow */
import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../Theme/config'

export interface IProps {
  placeholder?: string
  type: string
  name: string
  handleChange: Function
  isChecked?: boolean
}

const Input = (props: IProps) => {
  const { placeholder, type, name, handleChange, isChecked } = props

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange && handleChange(event)

  const _handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    handleChange && handleChange(event)

  if (type === 'checkbox') {
    return (
      <CheckboxStyled
        type={type}
        name={name}
        placeholder={placeholder && placeholder}
        onChange={_handleChange}
        checked={isChecked}
      />
    )
  }

  if (type === 'select') {
    return (
      <SelectStyled defaultValue={'DEFAULT'} onChange={_handleSelect}>
        <option value='DEFAULT' disabled>
          Sélectionner
        </option>
        <option value='grapefruit'>Pamplemousse</option>
        <option value='lime'>Citron vert</option>
        <option value='coconut'>Noix de coco</option>
        <option value='mango'>Mangue</option>
      </SelectStyled>
    )
  }

  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={_handleChange}
    />
  )
}

const InputStyled = styled('input')`
  width: 100%;
  height: 30px;
  padding-left: 0.5rem;
  font-family: ${Theme.default.fontFamily};
  font-size: ${Theme.default.fontSize.default};
  color: ${Theme.default.color};
  background: ${Theme.default.inputs.background};
  border-radius: 4px;
  border: none;
`

const SelectStyled = styled('select')`
  width: 100%;
  height: 30px;
  padding-left: 0.5rem;
  font-family: ${Theme.default.fontFamily};
  font-size: ${Theme.default.fontSize.default};
  color: ${Theme.default.color};
  background: ${Theme.default.inputs.background};
  border-radius: 4px;
  border: none;
`

const CheckboxStyled = styled('input')`
  border-radius: 3px;
  margin-left: 16px;
  font-family: ${Theme.default.fontFamily};
  font-size: ${Theme.default.fontSize.small};
  color: ${Theme.default.color};
`

export default Input
