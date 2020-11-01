const config = {
  select: [
    {
      placeholder: 'Sélectionner',
      type: 'select',
      name: 'genre',
      labelText: 'Genre',
    },
  ],
  inputs: [
    {
      placeholder: '',
      type: 'text',
      name: 'firstname',
      labelText: 'Nom',
    },

    {
      placeholder: '',
      type: 'text',
      name: 'lastname',
      labelText: 'Prénom',
    },

    {
      placeholder: '',
      type: 'email',
      name: 'email',
      labelText: 'Adresse e-mail',
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
      name: 'password',
      labelText: 'Mot de passe',
    },

    {
      placeholder: '',
      type: 'password',
      name: 'confirmPassword',
      labelText: 'Confirmation du mot de passe',
    },
  ],

  checkboxes: [
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
  ],
}

export default config
