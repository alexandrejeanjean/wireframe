import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../../Theme/config'

import SocialButton from '../../../ui/SocialButton'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

const FormSocial = () => (
  <SocialStyled>
    <RowStyled>
      <ColumnStyled>
        <SocialButton
          icon={faGoogle}
          iconColor={Theme.default.color}
          value="S'inscrire avec Google"
        />
      </ColumnStyled>
      <ColumnStyled>
        <SocialButton
          icon={faFacebook}
          iconColor={Theme.default.color}
          value="S'inscrire avec Facebook"
        />
      </ColumnStyled>
    </RowStyled>
  </SocialStyled>
)

const SocialStyled = styled('div')`
  display: flex;
  margin: auto;
  justify-content: center;
`

const RowStyled = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ColumnStyled = styled('div')`
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default FormSocial
