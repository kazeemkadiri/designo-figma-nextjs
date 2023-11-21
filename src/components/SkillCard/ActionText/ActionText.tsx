import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { twMerge } from 'tailwind-merge'

const ActionText = ({children, className}: ICommonProps) => {
  return (
    <div className={twMerge("text-[0.9375rem] text-white tracking-[5px] mt-[0.75rem] font-medium flex items-center", className)}>{ children }</div>
  )
}

export default ActionText