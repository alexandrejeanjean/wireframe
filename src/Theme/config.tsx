import * as Colors from '../constant/colors'

const Theme = {
  default: {
    fontFamily: 'Roboto',
    fontSize: {
      default: '14px',
      small: '12px',
      medium: '16px',
      heading: {
        h1: '32px',
      },
    },
    fontWeight: {
      default: '400',
      bold: '700',
    },
    color: Colors.primary,
    buttons: {
      submitButton: `${Colors.secondary} 0% 0% no-repeat padding-box`,
      socialButton: `${Colors.tertiary} 0% 0% no-repeat padding-box;`,
    },
    inputs: {
      background: `${Colors.tertiary} 0% 0% no-repeat padding-box`,
    },
  },
}

export default Theme
