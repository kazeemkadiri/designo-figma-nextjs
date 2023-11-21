import { twMerge } from "tailwind-merge"
import { ICommonProps } from "../../../../interfaces/interfaces"

const SkillTitle = ({ children, className }: ICommonProps) => {
  return (
    <header className={twMerge("md:text-[2.5rem] text-[1.75rem] text-white tracking-[2px] md:leading-1", className)}>{ children }</header>
  )
}

export default SkillTitle