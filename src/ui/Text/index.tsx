import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../Theme/config'

export interface IProps {
  display?: string
  text: string
  fontFamily?: string
  fontSize?: string
  color?: string
  fontWeight?: string
  underlined?: string
}
const Text = (props: IProps) => {
  const { text } = props
  return <TextStyled {...props}>{text}</TextStyled>
}

const TextStyled = styled('p')`
  display: ${(props: IProps) => (props.display ? props.display : 'inline')};
  font-family: ${(props: IProps) =>
    props.fontFamily ? props.fontFamily : Theme.default.fontFamily};
  font-size: ${(props: IProps) =>
    props.fontSize ? props.fontSize : Theme.default.fontSize.default};
  font-weight: ${(props: IProps) =>
    props.fontWeight ? props.fontWeight : Theme.default.fontWeight.default};
  color: ${(props: IProps) =>
    props.color ? props.color : Theme.default.color};
  text-decoration: ${(props: IProps) =>
    props.underlined ? props.underlined : 'none'};
`

export default Text
