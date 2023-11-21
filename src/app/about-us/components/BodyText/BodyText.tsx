import React from 'react'
import { ICommonProps } from '../../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const BodyText = ({ children, className }: ICommonProps) => {
  return (
    <p className={cn(`lg:text-start text-center text-base md:mt-6 mt-8 !leading-[1.625rem] text-white`, className)}>
        {children}                
    </p>
  )
}

export default BodyText