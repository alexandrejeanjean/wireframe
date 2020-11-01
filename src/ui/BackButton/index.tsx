import React from 'react'
import styled from '@emotion/styled'

import Text from '../../ui/Text'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import Theme from '../../Theme/config'

const BackButton = () => {
  const _handleClick = () => {
    alert('Back to the past !')
  }
  return (
    <BackButtonStyled onClick={_handleClick}>
      <FontAwesomeIcon
        icon={faArrowUp}
        color={Theme.default.color}
        className='fa-xs'
      />
      <Text text='Retour' />
    </BackButtonStyled>
  )
}

const BackButtonStyled = styled('button')`
  position: absolute;
  top: 0.8rem;
  background: none;
  border: none;

  display: flex;
  align-items: center;

  cursor: pointer;

  & > svg {
    margin-right: 0.4rem;
  }
`

export default BackButton
