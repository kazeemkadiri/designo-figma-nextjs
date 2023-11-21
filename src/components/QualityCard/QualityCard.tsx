import { cn } from "@/lib/utils"
import { ICommonProps } from "../../../interfaces/interfaces"
import { Card } from "../ui/card"
import { twMerge } from "tailwind-merge"

const QualityCard = ({children, className}: ICommonProps) => {
  return (
    <Card className={cn("flex lg:flex-col lg:justify-between lg:items-center lg:flex-grow-1 md:flex-row flex-col items-center border-0 bg-transparent", className)}>{children}</Card>
  )
}

export default QualityCard