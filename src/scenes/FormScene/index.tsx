import React from 'react'
import styled from '@emotion/styled'

import FormHeader from '../../components/Form/FormHeader'
import FormSocial from '../../components/Form/FormSocial'
import FormDivider from '../../components/Form/FormDivider'
import Form from '../../components/Form'
import FormFooter from '../../components/Form/FormFooter'

const FormScene = () => {
  return (
    <FormSceneStyled>
      <FormHeader />
      <FormSocial />
      <FormDivider />
      <Form />
      <FormFooter />
    </FormSceneStyled>
  )
}

const FormSceneStyled = styled('section')`
  width: 665px;
  height: 765px;
  margin: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 76px #00000014;
  border-radius: 20px;
`

export default FormScene
