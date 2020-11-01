import React from 'react'
import styled from '@emotion/styled'

import Input from '../../ui/Input'
import SubmitButton from '../../ui/SubmitButton'

import config from './config'

const Form = () => {
  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Your are writing good stuff ::', event.target.value)
  }

  const _submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Form is sending you hello :)')
  }

  return (
    <FormStyled onSubmit={(event) => _submit(event)}>
      <RowStyled>
        <ColumnStyled>
          {config.select.map((input) => (
            <Input
              key={input.labelText}
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
              labelText={input.labelText}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                _handleChange(e)
              }
            />
          ))}
        </ColumnStyled>
        <ColumnStyled></ColumnStyled>
      </RowStyled>
      <RowStyled>
        <ColumnStyled>
          {config.inputs
            .filter((input, i: number) => i % 2 === 0)
            .map((input) => (
              <Input
                key={input.labelText}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                labelText={input.labelText}
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  _handleChange(e)
                }
              />
            ))}
        </ColumnStyled>
        <ColumnStyled>
          {config.inputs
            .filter((input, i: number) => i % 2 === 1)
            .map((input) => (
              <Input
                key={input.labelText}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                labelText={input.labelText}
                handleChange={_handleChange}
              />
            ))}
        </ColumnStyled>
      </RowStyled>
      <RowStyled direction='column' width='570'>
        {config.checkboxes.map((input) => (
          <Input
            key={input.labelText}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            labelText={input.labelText}
            handleChange={_handleChange}
          />
        ))}
      </RowStyled>
      <RowStyled>
        <SubmitButton value="S'inscrire" disabled={false} />
      </RowStyled>
    </FormStyled>
  )
}

const FormStyled = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type RowProps = {
  direction?: string
  width?: string
}

const RowStyled = styled('div')`
  width: ${(props: RowProps) => (props.width ? props.width : 600)}px;
  display: flex;
  justify-content: center;
  flex-direction: ${(props: RowProps) =>
    props.direction ? props.direction : 'row'};
`

const ColumnStyled = styled('div')`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Form
