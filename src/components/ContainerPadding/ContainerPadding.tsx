"use client"

const ContainerPadding = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='lg:px-[var(--site-container-padding)] md:px-[var(--site-tablet-container-padding)]'>{children}</div>
  )
}

export default ContainerPadding