import { cn } from "@/lib/utils"
import { ICommonProps } from "../../../interfaces/interfaces"

const BallsBackground = ({ children, className }: ICommonProps) => {
    return (
      <section 
          className={cn(`bg-[var(--site-peach)] md:rounded-[15px] lg:bg-right-top lg:bg-[length:auto_100%] md:bg-[length:127%_166%] md:bg-[left_center] bg-no-repeat bg-cover`, className)}
      >
        {children}
      </section>
    )
  }
  
  export default BallsBackground