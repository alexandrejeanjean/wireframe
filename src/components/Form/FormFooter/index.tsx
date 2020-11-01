import React from 'react'
import styled from '@emotion/styled'

import Theme from '../../../Theme/config'

import Text from '../../../ui/Text'

const FormFooter = () => (
  <FooterStyled>
    <Text
      fontSize={Theme.default.fontSize.small}
      text='Vous avez déjà un compte ? '
    />
    <Text
      fontSize={Theme.default.fontSize.small}
      text='Connectez-vous'
      underlined='underline'
    />
  </FooterStyled>
)

const FooterStyled = styled('footer')`
  margin-top: 0.8rem;
`

export default FormFooter
