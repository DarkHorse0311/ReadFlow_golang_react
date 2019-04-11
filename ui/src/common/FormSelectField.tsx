import React, { ReactNode } from 'react'
import { BaseInputProps, Omit } from 'react-use-form-state'
import { classNames } from './helpers'

type Props = {
  label: string
  required?: boolean
  readOnly?: boolean
  error?: boolean
  children?: ReactNode
}

type AllProps = Props & Omit<BaseInputProps, 'type'>

export default (props: AllProps) => {
  const {error, label, children, ...rest} = props

  const className = classNames(
    'form-group',
    error ? 'has-error' : null
  )

  return (
    <div className={className}>
      <select {...rest}>
        {children}
      </select>
      <label htmlFor={rest.name} className="control-label">{label}</label>
      <i className="bar"></i>
    </div>
  )
}