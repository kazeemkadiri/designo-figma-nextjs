import React from 'react'
import { Card } from '../ui/card'
import { ICommonProps } from '../../../interfaces/interfaces'


const SkillCard = ({children, className}: ICommonProps) => {
  return (
    <Card className={className}>
        { children }
    </Card>
  )
}

export default SkillCard