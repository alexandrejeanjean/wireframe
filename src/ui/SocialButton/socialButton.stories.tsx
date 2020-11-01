import React from 'react'
import { storiesOf } from '@storybook/react'
import SocialButton from './index'

import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

import Theme from '../../Theme/config'

storiesOf('SocialButton', module)
  .add('with Google icon', () => (
    <SocialButton
      value="S'inscrire avec Google"
      icon={faGoogle}
      iconColor={Theme.default.color}
    />
  ))
  .add('with Facebook icon', () => (
    <SocialButton
      value="S'inscrire avec Facebook"
      icon={faFacebook}
      iconColor={Theme.default.color}
    />
  ))
  .add('with colored icon', () => (
    <SocialButton
      value="S'inscrire avec Google"
      icon={faGoogle}
      iconColor='orange'
    />
  ))
