import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
import slugify from './../helper/slugify'

const Select = ({ id, label, options, placeholder, required, readOnly }) => {
  const { handleChange } = useContext(FormContext)
  const newOptions = options.split(',')
  return (
    <div className='my-3'>
      <label className='form-label'>{label}</label>
      <select
        title={label}
        required={required}
        readOnly={readOnly && 'readOnly'}
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
