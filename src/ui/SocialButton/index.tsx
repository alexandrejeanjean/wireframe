import React from 'react'
import styled from '@emotion/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Theme from '../../Theme/config'
import Text from '../Text'

export interface IProps {
  value: string
  icon: any
  iconColor: string
}
const SocialButton = (props: IProps) => {
  const { value, icon, iconColor } = props
  return (
    <SocialButtonStyled>
      <IconWrapperStyled>
        <FontAwesomeIcon icon={icon} color={iconColor} />
      </IconWrapperStyled>
      <Text fontSize={Theme.default.fontSize.medium} text={value} />
    </SocialButtonStyled>
  )
}

const SocialButtonStyled = styled('button')`
  width: 270px;
  height: 60px;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  background: ${Theme.default.buttons.socialButton};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: ease 0.2s all;
  &:hover {
    transform: translate(0, -0.1rem);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapperStyled = styled('div')`
  width: 20px;
  margin-right: 0.2rem;
`

export default SocialButton
