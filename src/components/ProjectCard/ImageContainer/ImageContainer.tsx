import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const ImageContainer = ({children, className}: ICommonProps) => {
  return (
    <section
        className={cn(`lg:w-full lg:h-[17.9rem] lg:rounded-t-[0.9375rem] hover:border-green-400 md:max-lg:h-full md:max-lg:w-[49.2%] md:max-lg:rounded-l-[0.9375rem] h-80 w-full`, className)}
        >
        {children}
    </section>
  )
}

export default ImageContainer