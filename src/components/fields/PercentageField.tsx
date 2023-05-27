import React, { useState } from 'react'

import { FieldDefaultProps, FieldProps } from '../../types'

function PercentageField({ name, initialValue, onChange }: FieldProps) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e)
  }

  return (
    <input
      type="percentage"
      name={name}
      className="block w-full rounded-lg border-2 border-gray-300 py-2 px-3 focus:outline-none"
      value={value}
      onChange={handleChange}
    />
  )
}

PercentageField.defaultProps = FieldDefaultProps

export default PercentageField
