import { useState } from 'react'

export const useForm = (initial) => {
  const [formState, setFormState] = useState(initial)

  const onInputChange = ({ target }) => {
    const { value } = target
    setFormState(value)
  }

  return {
    formState,
    onInputChange
  }
}
