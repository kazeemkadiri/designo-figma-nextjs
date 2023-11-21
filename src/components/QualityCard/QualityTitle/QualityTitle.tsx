import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const QualityTitle = ({children, className}: ICommonProps) => {
  return (
    <h4 className={cn("mt-[3rem] text-[var(--site-dark-grey)] lg:text-center tracking-[5px] md:text-start md:mt-0 md:w-full", className)}>{children}</h4>
  )
}

export default QualityTitle