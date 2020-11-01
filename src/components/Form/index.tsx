import React from 'react'
import styled from '@emotion/styled'

import Input from '../../ui/Input'
import SubmitButton from '../../ui/SubmitButton'

const inputsLeft = [
  {
    placeholder: 'Sélectionner',
    type: 'select',
    name: 'genre',
    labelText: 'Genre',
  },
  {
    placeholder: '',
    type: 'text',
    name: 'firstname',
    labelText: 'Nom',
  },

  {
    placeholder: '',
    type: 'email',
    name: 'email',
    labelText: 'Adresse e-mail',
  },

  {
    placeholder: '',
    type: 'password',
    name: 'password',
    labelText: 'Mot de passe',
  },
]

const inputsRight = [
  {
    placeholder: '',
    type: 'text',
    name: 'lastname',
    labelText: 'Prénom',
  },

  {
    placeholder: '',
    type: 'phone',
    name: 'phone',
    labelText: 'Téléphone',
  },

  {
    placeholder: '',
    type: 'password',
    name: 'confirmPassword',
    labelText: 'Confirmation du mot de passe',
  },
]

const checkBox = [
  {
    placeholder: '',
    type: 'checkbox',
    name: 'cgu',
    labelText:
      'J’accepte les conditions d’utilisation et la politique de confidentialité',
  },
  {
    placeholder: '',
    type: 'checkbox',
    name: 'newsletter',
    labelText:
      'Je m’inscris à la Newsletter pour me tenir informé de toutes les dernières actualités',
  },
]

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
          {inputsLeft.slice(0, 1).map((input) => (
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
          {inputsLeft.slice(1).map((input) => (
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
          {inputsRight.map((input) => (
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
      <RowStyled direction='column'>
        {checkBox.map((input) => (
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
}

const RowStyled = styled('div')`
  max-width: 600px;
  width: 100%;
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
