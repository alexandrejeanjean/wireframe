/* @flow */
import React from 'react'
import styled from '@emotion/styled'

import Text from '../Text'

import Theme from '../../Theme/config'

export interface IProps {
  labelText: string
  type: string
  children: React.ReactNode
}

const Label = (props: IProps) => {
  const { labelText, type, children } = props
  return (
    <LabelStyled type={type}>
      <Text
        text={labelText}
        fontSize={
          type === 'checkbox'
            ? Theme.default.fontSize.small
            : Theme.default.fontSize.default
        }
      />
      {children}
    </LabelStyled>
  )
}

type LabelProps = {
  type: string
}

const LabelStyled = styled('label')`
  display: flex;
  flex-direction: ${(props: LabelProps) =>
    props.type === 'checkbox' ? 'row-reverse' : 'column'};
  align-items: ${(props: LabelProps) =>
    props.type === 'checkbox' ? 'center' : 'flex-start'};
  cursor: pointer;
`

export default Label
