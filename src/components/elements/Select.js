import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
import slugify from './../helper/slugify'

const Select = ({ id, label, options, placeholder, required, readonly }) => {
  const { handleChange } = useContext(FormContext)
  const newOptions = options.split(',')
  return (
    <div>
      <label className='form-label'>{label}</label>
      <select
        title={label}
        required={required}
        readonly={readonly && 'readonly'}
        className='form-select'
        onChange={(event) => handleChange(id, event)}
      >
        <option>{placeholder}</option>
        {newOptions.length > 0 &&
          newOptions.map((option, i) => (
            <option value={slugify(option)} key={i}>
              {option}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select
