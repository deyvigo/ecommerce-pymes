import PropTypes from 'prop-types'
import { useState } from 'react'

export const Input = ({ type, name, value, label, onInputChange, minLength }) => {
  const [isFocus, setIsFocus] = useState(false)

  const handleBlur = (e) => {
    if (e.target.value) {
      setIsFocus(true)
      return
    }
    setIsFocus(false)
  }

  return (
    <>
      <div className="relative flex items-center w-full">
        <div
          htmlFor={name}
          className={`absolute pointer-events-none left-2 p-[1px] duration-300 transition-all ease-in-out ${isFocus ? 'text-base -translate-y-[20px] bg-[white] w-auto text-waikawa-gray-700' : 'text-lg text-[black] text-opacity-70'}`}
        >
          {label}
        </div>
        <input
          className="w-full border-2 border-waikawa-gray-600 p-2 rounded-lg outline-none"
          required
          minLength={minLength}
          onFocus={() => { setIsFocus(true) }}
          onBlur={ handleBlur }
          type={type}
          name={name}
          value={value}
          onChange={(e) => { onInputChange(e) }}
        />
      </div>
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onInputChange: PropTypes.func,
  minLength: PropTypes.number
}
