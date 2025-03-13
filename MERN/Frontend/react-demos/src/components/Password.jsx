import React from 'react'
import ValidPassword from './ValidPassword'
import InvalidPassword from './InvalidPassword'

const Password = ({isValid}) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />
}

export default Password
