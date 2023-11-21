import React from 'react'
import { ICommonProps } from '../../../interfaces/interfaces'
import { cn } from '@/lib/utils'

import "./project-card.scss"

const ProjectCard = ({children, className}: ICommonProps) => {
  return (
    <div className={cn(`lg:h-auto lg:w-full flex lg:flex-col hover:cursor-pointer hover:text-white`,className)}>
        {children}
    </div>
  )
}

export default ProjectCard