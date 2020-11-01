import React from 'react'
import { storiesOf } from '@storybook/react'
import SubmitButton from './index'

storiesOf('SubmitButton', module)
  .add('enabled', () => <SubmitButton value="S'inscrire"  disabled={false} />)
  .add('disabled', () => <SubmitButton value="S'inscrire"  disabled={true} />)
