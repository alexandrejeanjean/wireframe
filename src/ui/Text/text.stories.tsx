import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './index'

import Theme from '../../Theme/config'

storiesOf('Text', module)
  .add('default', () => <Text text='Paragraph' />)
  .add('with colored text', () => <Text text='Paragraph' color='red' />)
  .add('with default title sized', () => (
    <Text text='Paragraph' fontSize={Theme.default.fontSize.heading.h1} />
  ))
