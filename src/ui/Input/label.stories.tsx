import React from 'react'
import { storiesOf } from '@storybook/react'
import Label from './Label'
import Input from './Input'

const MockedHandleChange = () => {}

storiesOf('Label', module)
  .add('with text input', () => (
    <Label type='text' labelText='Nom'>
      <Input type='text' name='firstname' handleChange={MockedHandleChange} />
    </Label>
  ))
  .add('with select input', () => (
    <Label type='select' labelText='Genre'>
      <Input type='select' name='cgu' handleChange={MockedHandleChange} />
    </Label>
  ))
  .add('with checkbox input', () => (
    <Label type='checkbox' labelText="J'accepte les conditions d'utilisation">
      <Input type='checkbox' name='cgu' handleChange={MockedHandleChange} />
    </Label>
  ))
