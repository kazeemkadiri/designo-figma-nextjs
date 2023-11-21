import { ICommonProps } from "../../../interfaces/interfaces"

interface IOtherProps{
  contentContainerClasses: string,
  LeftContainerContent: React.ReactNode,
  RightContainerContent: React.ReactNode
}

function TwoSidedCards({className, contentContainerClasses, LeftContainerContent, RightContainerContent}: ICommonProps & IOtherProps) {
  return (
    <section className={className}>
      <div className={contentContainerClasses}>
          { LeftContainerContent }
          { RightContainerContent }
      </div>
    </section>
  )
}

export default TwoSidedCards