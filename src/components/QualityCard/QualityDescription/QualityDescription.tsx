import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const QualityDescription = ({children, className}: ICommonProps) => {
  return (
    <p className={cn("mt-[2rem] text-[var(--site-dark-grey)] text-base lg:text-center w-full leading-[1.625]  md:text-start md:mt-4", className)}>{children}</p>
  )
}

export default QualityDescription