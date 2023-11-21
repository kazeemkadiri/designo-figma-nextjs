import React from 'react'
import { ICommonProps } from '../../../../../interfaces/interfaces'

const Container = ({children, className}: ICommonProps) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Container