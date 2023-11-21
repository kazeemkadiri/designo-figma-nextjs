import { cn } from "@/lib/utils"
import { ICommonProps } from "../../../../interfaces/interfaces"

const DescriptionContainer = ({children, className}: ICommonProps) => {
  return (
    <div className={cn("description bg-[var(--site-lighter-peach)] md:w-full lg:h-[9.875rem] rounded-b-[0.9375rem] text-center flex flex-col items-center justify-center lg:px-[8%] md:max-lg:w-[52.25%] md:h-full md:max-lg:px-[8%] md:max-lg:rounded-r-[0.9375rem] md:max-lg:rounded-bl-none h-auto pt-8 px-[9%] pb-8", className)}>{children}</div>
  )
}

export default DescriptionContainer