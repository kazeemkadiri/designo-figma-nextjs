import React from 'react'
import TwoSidedCards from '../../components/TwoSidedCards/TwoSidedCards'
import ContainerPadding from '../../components/ContainerPadding/ContainerPadding'
import CountryItem from '../../components/CountryItem/CountryItem'
import Footer from '../../components/Footer/Footer'
import BallsBackground from '../../components/BallsBackground/BallsBackground'
import CallToAction from '../../components/CallToAction/CallToAction'
import HeaderText from './components/HeaderText/HeaderText'
import BodyText from './components/BodyText/BodyText'
import CardImage from './components/CardImage/CardImage'
import Image from 'next/image'
import Container from './components/Container/Container'
import Link from 'next/link'

function AboutUs() {
  return (
    <div className="relative w-full px-0 lg:bg-[url('/images/hero-bg.svg'),_url('/images/qualities-bg.svg')] bg-no-repeat bg-cover lg:bg-[length:69.86%] lg:bg-[position:left_0rem_top_19.625rem,_right_-24.75rem_top_101.375rem]">
        {/* This is the implementation of the hero for about-us page */}
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[30rem] md:h-[39.5rem] h-[44.6875rem] relative"
                contentContainerClasses="flex lg:flex-row lg:h-[30rem] md:rounded-[0.9375rem] flex-col flex-col-reverse h-full overflow-hidden"
                LeftContainerContent={
                    <section className="flex flex-col justify-center items-center lg:w-[57.15%] lg:h-full lg:bg-[url('/images/single-oval-text-bg.webp')] bg-[var(--site-peach)] md:w-full md:h-[49.37%] md:px-[unset] h-[24.6875rem] max-md:px-[6.4%] bg-no-repeat bg-cover">
                        <Container className="lg:w-[70.3%] md:w-[83.16%]">
                            <HeaderText className="text-[3rem] text-white lg:text-start">About Us</HeaderText>
                            <BodyText>
                            Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.
                            </BodyText>
                        </Container>
                    </section>
                }
                RightContainerContent={
                    <CardImage
                        className="lg:w-[42.84%] lg:h-full lg:bg-[url('/images/about-us/hero-desktop.webp')] md:bg-[url('/images/about-us/hero-tablet.webp')] bg-[url('/images/about-us/hero-mobile.webp')] bg-no-repeat bg-cover md:w-full md:h-[50.63%] h-[20rem]" 
                    />
                }
            />
        </ContainerPadding>
        {/* End hero implementation */}


        {/* Section one */}
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[40rem] relative lg:mt-40 md:h-[46rem] md:mt-[7.5rem] h-[54.0625rem]"
                contentContainerClasses="flex lg:flex-row h-full md:rounded-[0.9375rem] flex-col overflow-hidden"
                LeftContainerContent={
                    <CardImage
                        className="lg:w-[42.84%] lg:h-full lg:bg-[url('/images/about-us/section-one-desktop.webp')] md:bg-[url(/images/about-us/section-one-tablet.webp')] bg-[url('/images/about-us/section-one-mobile.webp')] bg-no-repeat bg-cover md:w-full md:h-[50.63%] h-[20rem]" 
                    />
                }
                RightContainerContent={
                    <section className="flex flex-col justify-center items-center lg:w-[57.15%] lg:h-full bg-[var(--site-lighter-peach)] lg:bg-[url('/images/about-us/section-two-text-bg.webp')] bg-no-repeat bg-cover lg:bg-[bottom_0px_left_-146px] md:w-full h-[34.0625rem] max-lg:px-[6.4%]">
                        <Container className="lg:w-[70.3%] md:w-[83.16%]">
                            <HeaderText className="lg:leading-[3rem] lg:text-start text-center text-[2.5rem] text-[var(--site-peach)]">World-class talent</HeaderText>
                            <BodyText className="!text-[var(--site-dark-grey)]">
                            We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                            <br />
                            <br />
                            Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.
                            </BodyText>
                        </Container>
                    </section>
                }
            />
        </ContainerPadding>
        {/* End section one */}

        {/* Section two - Countries list */}
        <ContainerPadding>
            <section className='w-full flex lg:gap-[unset] lg:flex-row lg:justify-between lg:h-[24.3125rem] relative lg:mt-[8.4193rem] lg:px-[6.66%] md:mt-[7.5rem] flex-col items-center justify-between md:gap-[5rem] gap-[7.5rem] my-[7.5rem]'>
                <Link href={'/locations#canada'}>
                    <CountryItem 
                        icon="/images/about-us/canada-icon.webp"
                        title="CANADA"
                    />
                </Link>

                <Link href={'/locations#australia'}>
                    <CountryItem 
                        icon="/images/about-us/australia-icon.webp"
                        iconClasses="md:rotate-[-17.15deg] rotate-[-90deg]"
                        title="AUSTRALIA"
                    />
                </Link>
                
                <Link href={'/locations#united-kingdom'}>
                    <CountryItem 
                        icon="/images/about-us/uk-icon.webp"
                        title="UNITED KINGDOM"
                    />
                </Link>
            </section>
        </ContainerPadding>
        {/* End section two */}

        {/* Section three */}
        
        <ContainerPadding>
            <TwoSidedCards 
                className="lg:w-full lg:h-[40rem] relative lg:mt-40 md:h-[46rem] h-[54.0625rem] md:mt-[7.5rem]"
                contentContainerClasses="flex lg:flex-row h-full md:rounded-[0.9375rem] flex-col flex-col-reverse overflow-hidden"
                LeftContainerContent={
                    <section className="flex flex-col justify-center items-center lg:w-[57.15%] lg:h-full bg-[var(--site-lighter-peach)] lg:bg-[url('/images/about-us/section-three-text-bg.webp')] bg-no-repeat bg-cover lg:bg-[position:bottom_0px_left_-3.0625rem] md:w-full h-[34.0625rem] max-md:px-[6.4%]">
                        <Container className="lg:w-[70.3%] md:w-[83.16%]">
                            <HeaderText className="lg:leading-[3rem] lg:w-full lg:text-start text-center text-[2.5rem] text-[var(--site-peach)]">The real deal</HeaderText>
                            <BodyText className="text-[var(--site-dark-grey)]">
                                As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                                <br />
                                <br />
                                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                            </BodyText>
                        </Container>
                    </section>
                }
                RightContainerContent={
                    <CardImage
                        className="lg:w-[42.84%] lg:h-full lg:bg-[url('/images/about-us/section-three-desktop.webp')] md:bg-[url('/images/about-us/section-three-tablet.webp')] bg-[url('/images/about-us/section-three-mobile.webp')] bg-no-repeat bg-cover md:w-full md:h-[50.63%] h-[20rem]" 
                    />
                }
            />
        </ContainerPadding>
        {/* End section three */}

        {/* Footer */}
        <Footer className="lg:mt-[24rem] lg:pt-0 md:mt-[6.375rem] mt-[7.5rem] h-[62.8125rem] pt-[11.875rem]">
            <BallsBackground
            className="z-20 lg:w-[77.15%] lg:h-[18.25rem] lg:bottom-[20.0625rem] lg:top-[unset] lg:left-auto lg:right-auto absolute lg:px-[8.55%] lg:py-[4.5rem] flex lg:flex-row lg:justify-between lg:items-center md:bottom-[21.0625rem] md:h-[21.875rem] md:w-[89.84%] md:flex-col justify-center items-center md:right-[5%] w-[87.2%] right-[6.4%] h-[23.6875rem] md:px-0 px-6 flex-col md:py-0 py-16 top-0 md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/footer-balls-background.webp')] bg-cover rounded-[0.9375rem] leading-[1.5625rem] bg-no-repeat">
            <CallToAction />
            </BallsBackground>
        </Footer>
      {/* End Footer */}
    </div>
  )
}

export default AboutUs