import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const QualityImage = ({src, className}:{src: string} & ICommonProps) => {
  return (
    <img src={src} alt="quality image" className={cn("w-[12.625rem] h-[12.625rem]", className)} />
  )
}

export default QualityImage