import { cn } from "@/lib/utils"
import { ICommonProps } from "../../../../interfaces/interfaces"

const ProjectDescription = ({children, className}: ICommonProps) => {
  return (
    <h3 className={cn("text-base mt-4 text-[var(--site-dark-grey)]", className)}>{children}</h3>
  )
}

export default ProjectDescription