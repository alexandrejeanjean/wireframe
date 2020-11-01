import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

const MockedHandleChange = () => {}

storiesOf('Input', module)
  .add('with text type', () => (
    <Input type='text' name='firstname' handleChange={MockedHandleChange} />
  ))
  .add('with select type', () => (
    <Input type='select' name='firstname' handleChange={MockedHandleChange} />
  ))
  .add('with checkbox type', () => (
    <Input type='checkbox' name='firstname' handleChange={MockedHandleChange} />
  ))
