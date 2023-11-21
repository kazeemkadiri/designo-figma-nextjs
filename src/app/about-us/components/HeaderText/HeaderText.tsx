import React from 'react'
import { ICommonProps } from '../../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const HeaderText = ({children, className}: ICommonProps) => {
  return (
    <h1 className={cn(`lg:text-start text-center font-medium`,className)}>{children}</h1>
  )
}

export default HeaderText