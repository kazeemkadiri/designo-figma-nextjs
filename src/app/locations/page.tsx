import React from 'react'
import ContainerPadding from '@/components/ContainerPadding/ContainerPadding'
import TwoSidedCards from '@/components/TwoSidedCards/TwoSidedCards'
import Footer from '@/components/Footer/Footer'
import BallsBackground from '@/components/BallsBackground/BallsBackground'
import CallToAction from '@/components/CallToAction/CallToAction'

const Locations = () => {
  return (
    <div className='relative w-full px-0'>
        {/* Section one */}
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[20.375rem] md:h-[42.69rem] h-[44.625rem] relative"
                contentContainerClasses="flex lg:flex-row lg:h-full w-full md:rounded-[0.9375rem] flex-col flex-col-reverse h-full overflow-hidden md:gap-[2.7%]"
                LeftContainerContent={
                    <TwoSidedCards 
                        className="lg:w-[65.70%] lg:h-full flex md:flex-row flex-col"
                        contentContainerClasses="md:bg-[url('/images/locations/section-one-text-bg.webp')] md:bg-[position:bottom_0px_left_0px] md:w-full md:h-full bg-[var(--site-lighter-peach)] bg-no-repeat bg-cover md:flex md:flex-row md:items-center md:justify-center flex-col md:rounded-[0.9375rem]"
                        LeftContainerContent={
                            <div id='#canada' className='flex flex-col md:h-[20.375rem] md:w-[73.97%] lg:h-[9.375rem] h-[24.625rem] md:rounded-[0.9375rem] justify-center items-center max-md:bg-[url("/images/locations/section-one-text-bg.webp")] bg-[position:top_0px_left_0px] bg-no-repeat bg-cover'>
                            <h1 className='md:text-start text-center text-[var(--site-peach)] font-medium text-[2.5rem] w-full'>Canada</h1>
                            <section className='flex md:flex-row flex-col justify-center w-full mt-6'>
                                <div className='flex flex-col md:items-start items-center md:w-1/2'>
                                    <h6 className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Designo Central Office</h6>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">3886 Wellington Street </p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">Toronto, Ontario M9C 3J5</p>
                                </div>
                                <div className='flex flex-col md:items-start items-center md:w-1/2 max-md:mt-6'>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Contact</p> 
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">P : +1 253-863-8967 </p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">M : contact@designo.co</p>
                                </div>
                            </section>
                            
                            </div>
                        }
                        RightContainerContent={<></>}
                    />
                }
                RightContainerContent={
                    <section className="lg:w-[31.5%] lg:h-full lg:bg-[url('/images/locations/section-one-desktop.webp')] bg-no-repeat md:bg-[url('/images/locations/section-one-tablet.webp')] bg-[url('/images/locations/section-one-mobile.webp')] bg-[length:100%_100%] w-full md:h-[43.47%] h-[20rem]">
                    </section>
                }
            />
        </ContainerPadding>
        {/* End section one */}

        {/* Section two */}
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[20.375rem] md:h-[42.69rem] h-[44.625rem] mt-8 relative"
                contentContainerClasses="flex lg:flex-row lg:flex-row-reverse lg:h-full md:rounded-[0.9375rem] flex-col flex-col-reverse h-full overflow-hidden md:gap-[2.7%]"
                LeftContainerContent={
                    <TwoSidedCards 
                        className="lg:w-[65.70%] lg:h-full flex md:flex-row flex-col"
                        contentContainerClasses="md:bg-[url('/images/locations/section-one-text-bg.webp')] md:bg-[position:bottom_0px_left_0px] md:w-full md:h-full bg-[var(--site-lighter-peach)] bg-no-repeat bg-cover md:flex md:flex-row md:items-center md:justify-center flex-col md:rounded-[0.9375rem]"
                        LeftContainerContent={
                            <div id='australia' className='flex flex-col md:h-[20.375rem] md:w-[73.97%] lg:h-[9.375rem] h-[24.625rem] md:rounded-[0.9375rem] justify-center items-center max-md:bg-[url("/images/locations/section-one-text-bg.webp")] bg-[position:top_0px_left_0px] bg-no-repeat bg-cover'>
                            <h1 className='md:text-start text-center text-[var(--site-peach)] font-medium text-[2.5rem] w-full'>Australia</h1>
                            <section className='flex md:flex-row flex-col justify-center w-full mt-6'>
                                <div className='flex flex-col md:items-start items-center md:w-1/2'>
                                    <h6 className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Designo AU Office</h6>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">19 Balonne Street</p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">New South Wales 2443</p>
                                </div>
                                <div className='flex flex-col md:items-start items-center md:w-1/2 max-md:mt-6'>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Contact</p> 
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">P : (02) 6720 9092</p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">M : contact@designo.au</p>
                                </div>
                            </section>
                            
                            </div>
                        }
                        RightContainerContent={<></>}
                    />
                }
                RightContainerContent={
                    <section className="lg:w-[31.5%] lg:h-full lg:bg-[url('/images/locations/section-two-desktop.webp')] bg-no-repeat md:bg-[url('/images/locations/section-two-tablet.webp')] bg-[url('/images/locations/section-two-mobile.webp')] bg-[length:100%_100%] w-full md:h-[43.47%] h-[20rem] md:rounded-[0.9375rem]">
                    </section>
                }
            />
        </ContainerPadding>
        {/* End section two */}

        {/* Section three */}
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[20.375rem] md:h-[42.69rem] h-[44.625rem] mt-8 relative"
                contentContainerClasses="flex lg:flex-row lg:h-full md:rounded-[0.9375rem] flex-col flex-col-reverse h-full overflow-hidden md:gap-[1.875rem]"
                LeftContainerContent={
                    <TwoSidedCards 
                        className="lg:w-[65.70%] lg:h-full flex md:flex-row flex-col"
                        contentContainerClasses="md:bg-[url('/images/locations/section-one-text-bg.webp')] md:bg-[position:bottom_0px_left_0px] md:w-full md:h-full bg-[var(--site-lighter-peach)] bg-no-repeat bg-cover md:flex md:flex-row md:items-center md:justify-center flex-col md:rounded-[0.9375rem]"
                        LeftContainerContent={
                            <div id='united-kingdom' className='flex flex-col md:h-[20.375rem] md:w-[73.97%] lg:h-[9.375rem] h-[24.625rem] md:rounded-[0.9375rem] justify-center items-center max-md:bg-[url("/images/locations/section-one-text-bg.webp")] bg-[position:top_0px_left_0px] bg-no-repeat bg-cover'>
                            <h1 className='md:text-start text-center text-[var(--site-peach)] font-medium text-[2.5rem] w-full'>United Kingdom</h1>
                            <section className='flex md:flex-row flex-col justify-center w-full mt-6'>
                                <div className='flex flex-col md:items-start items-center md:w-1/2'>
                                    <h6 className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Designo UK Office</h6>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">13  Colorado Way</p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">Rhyd-y-fro SA8 9GA</p>
                                </div>
                                <div className='flex flex-col md:items-start items-center md:w-1/2 max-md:mt-6'>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-bold leading-[1.625rem]">Contact</p> 
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">P : 078 3115 1400</p>
                                    <p className="text-[var(--site-black)] md:text-start text-center text-base font-normal leading-[1.625rem]">M : contact@designo.uk</p>
                                </div>
                            </section>
                            </div>
                        }
                        RightContainerContent={<></>}
                    />
                }
                RightContainerContent={
                    <section className="lg:w-[31.5%] lg:h-full lg:bg-[url('/images/locations/section-three-desktop.webp')] bg-no-repeat md:bg-[url('/images/locations/section-three-tablet.webp')] bg-[url('/images/locations/section-three-mobile.webp')] bg-[length:100%_100%] w-full md:h-[43.47%] h-[20rem]">
                    </section>
                }
            />
        </ContainerPadding>
        {/* End section three */}

        {/* Footer */}
        <Footer className="lg:mt-[24rem] lg:pt-0 md:mt-[6.375rem] mt-[7.5rem] h-[62.8125rem] pt-[11.875rem]">
            <BallsBackground
            className="z-20 lg:w-[77.15%] lg:h-[18.25rem] lg:bottom-[20.0625rem] lg:top-[unset] lg:left-auto lg:right-auto absolute lg:px-[8.55%] lg:py-[4.5rem] flex lg:flex-row lg:justify-between lg:items-center md:bottom-[21.0625rem] md:h-[21.875rem] md:w-[89.84%] md:flex-col justify-center items-center md:right-[5%] w-[87.2%] right-[6.4%] h-[23.6875rem] md:px-0 px-6 flex-col md:py-0 py-16 top-0 md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/footer-balls-background.webp')] bg-no-repeat bg-cover rounded-[0.9375rem] leading-[1.5625rem]">
            <CallToAction />
            </BallsBackground>
        </Footer>
      {/* End Footer */}
    </div>
  )
}

export default Locations