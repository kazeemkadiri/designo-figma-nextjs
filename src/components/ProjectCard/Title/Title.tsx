import React from 'react'
import { ICommonProps } from '../../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

const ProjectTitle = ({children, className}: ICommonProps) => {
  return (
    <h2 className={cn('text-[1.25rem] font-medium tracking-[5px] text-[var(--site-peach)]', className)}>{ children }</h2>
  )
}

export default ProjectTitle