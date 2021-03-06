import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Theme from '../../Theme/config'

export interface IProps {
  placeholder?: string
  type: string
  name: string
  handleChange: Function
}

const Input = (props: IProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const { placeholder, type, name, handleChange } = props

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleChange && handleChange(event)

  const _handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    handleChange && handleChange(event)

  if (type === 'checkbox') {
    return (
      <CheckboxContainer>
        <HiddenCheckbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          {...props}
        />
        <CheckboxStyled checked={isChecked} onChange={_handleChange}>
          <FontAwesomeIcon
            icon={faCheck}
            color={Theme.default.color}
            className='fa-xs'
          />
        </CheckboxStyled>
      </CheckboxContainer>
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

const HiddenCheckbox = styled('input')`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CheckboxContainer = styled('div')`
  display: inline-block;
  vertical-align: middle;
  margin-right: 1rem;
`

type CheckboxStyledProps = {
  checked?: boolean
}

const CheckboxStyled = styled('div')`
  display: flex;
  width: 15px;
  height: 15px;
  background: #fff 0% 0% no-repeat padding-box;

  border: 2px solid #d9d9d9;
  border-radius: 3px;
  transition: all 150ms;

  & > svg {
    visibility: ${(props: CheckboxStyledProps) =>
      props.checked ? 'visible' : 'hidden'};
  }
`

export default Input
