import BallsBackground from '@/components/BallsBackground/BallsBackground'
import CallToAction from '@/components/CallToAction/CallToAction'
import ContainerPadding from '@/components/ContainerPadding/ContainerPadding'
import Footer from '@/components/Footer/Footer'
import DescriptionContainer from '@/components/ProjectCard/DescriptionContainer/DescriptionContainer'
import ImageContainer from '@/components/ProjectCard/ImageContainer/ImageContainer'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import ProjectDescription from '@/components/ProjectCard/ProjectDescription/ProjectDescription'
import ProjectImage from '@/components/ProjectCard/ProjectImage/ProjectImage'
import ProjectTitle from '@/components/ProjectCard/Title/Title'
import ActionText from '@/components/SkillCard/ActionText/ActionText'
import SkillCard from '@/components/SkillCard/SkillCard'
import SkillTitle from '@/components/SkillCard/SkillTitle/SkillTitle'
import Link from 'next/link'
import React from 'react'

const WebDesign = () => {
  return (
    <>
    <ContainerPadding>
      {/* Background image behind BallsBackground component */}
      <div className="lg:absolute lg:w-full lg:h-[37.125rem] lg:bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-cover lg:left-0 lg:top-[17.5625rem] lg:bg-[length:69.86%_100%] z-0"></div>
      
      {/* Web Design Hero */}
      <BallsBackground className="relative w-full md:h-[15.75rem] z-20  md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/hero-single-circle.webp')] bg-no-repeat bg-cover max-md:h-80">
        <div className="w-full flex flex-col justify-center items-center h-full">
          <h3 className="md:text-[3rem] text-white text-[2rem] font-medium">Web Design</h3>
          <p className="text-white mt-[1.5rem] md:w-[65.7%] md:px-[5.2%] text-center text-[0.9375rem] w-full px-6">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
      </BallsBackground>

      {/* Web design projects */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-[1.875rem] lg:mt-40 relative z-20 md:flex md:flex-col md:mt-[6.75rem] mt-24 grid grid-cols-1 place-items-center">
        <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/express-desktop.svg')] md:bg-[url('/images/web-design/card-one-tablet.webp')] max-md:bg-[url('/images/web-design/card-one-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>EXPRESS</ProjectTitle>
                <ProjectDescription>A multi-carrier shipping website for ecommerce businesses</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/transfer-desktop.svg')] md:bg-[url('/images/web-design/card-two-tablet.webp')] max-md:bg-[url('/images/web-design/card-two-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>TRANSFER</ProjectTitle>
                <ProjectDescription>Site for low-cost money transfers and sending money within seconds</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/photon-desktop.svg')] md:bg-[url('/images/web-design/card-three-tablet.webp')] max-md:bg-[url('/images/web-design/card-three-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>PHOTON</ProjectTitle>
                <ProjectDescription>A state-of-the-art music player with high-resolution audio and DSP effects</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>
         
          <ProjectCard className="project-card lg:mb-0 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/builder-desktop.svg')] md:bg-[url('/images/web-design/card-four-tablet.webp')] max-md:bg-[url('/images/web-design/card-four-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>BUILDER</ProjectTitle>
                <ProjectDescription>A state-of-the-art music player with high-resolution audio and DSP effects</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-0 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/blogr-desktop.svg')] md:bg-[url('/images/web-design/card-five-tablet.webp')] max-md:bg-[url('/images/web-design/card-five-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>BLOGR</ProjectTitle>
                <ProjectDescription>Blogr is a platform for creating an online blog or publication</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-0 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-0 flex-col w-[87.2%]">
            <ImageContainer className="w-full">
                <ProjectImage className="w-full h-full lg:bg-[url('/images/web-design/camp-desktop.svg')] md:bg-[url('/images/web-design/card-six-tablet.webp')] max-md:bg-[url('/images/web-design/card-six-mobile.webp')] bg-[length:100%_100%] bg-no-repeat lg:bg-center max-md:rounded-tr-[0.9375rem]" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>CAMP</ProjectTitle>
                <ProjectDescription>Get expert training in coding, data, design, and digital marketing</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>
      </div>
    </ContainerPadding>
    
    <ContainerPadding>
      {/* Other Projects */}
      <section className="flex w-full lg:justify-between lg:gap-[2.6%] lg:flex-row lg:mt-40 flex-col md:mt-[7.5rem] md:mb-[7.5rem] gap-6 md:px-0 items-center mt-[6.875rem]">
        
        <Link href="app-design" className="lg:h-[19.25rem] lg:w-[29.75rem] md:h-[12.5rem] md:w-full h-[15.625rem] w-[87.2%] rounded-[15px] relative overflow-hidden flex flex-col justify-center items-center">
          <SkillCard className="bg-[url('/images/mobile-phone.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-full md:h-[12.5rem] md:bg-bottom md:bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] flex flex-col justify-center items-center relative z-20">
          <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
            <SkillTitle className="z-40">APP DESIGN</SkillTitle>
            <ActionText className="z-40">VIEW PROJECTS</ActionText>
          </div>
          </SkillCard>
        </Link>

        <Link href="graphic-design" className="lg:h-[19.25rem] lg:w-[29.75rem] md:h-[12.5rem] md:w-full h-[15.625rem] w-[87.2%] rounded-[15px] relative overflow-hidden flex flex-col justify-center items-center">
          <SkillCard className="bg-[url('/images/cables.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-full md:h-[12.5rem] md:bg-bottom bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] flex flex-col justify-center items-center relative z-20">
          <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
            <SkillTitle className="z-40">GRAPHIC DESIGN</SkillTitle>
            <ActionText className="z-40">VIEW PROJECTS</ActionText>
          </div>
          </SkillCard>
        </Link>

      </section>
    </ContainerPadding>

    <Footer className="lg:mt-[23.375rem] md:mt-[6.375rem] mt-[7.5rem] h-[62.8125rem] pt-[11.875rem] w-full">
      <BallsBackground
        className="z-20 lg:w-[77.15%] lg:h-[18.25rem] lg:bottom-[20.0625rem] lg:top-[unset] lg:left-auto lg:right-auto absolute lg:px-[8.55%] lg:py-[4.5rem] flex lg:flex-row lg:justify-between lg:items-center md:bottom-[21.0625rem] md:h-[21.875rem] md:w-[89.84%] md:flex-col justify-center items-center w-[87.2%] h-[23.6875rem] md:px-0 px-6 flex-col md:py-0 py-16 top-0 md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/footer-balls-background.webp')] bg-no-repeat bg-cover rounded-[0.9375rem] leading-[1.5625rem]">
        <CallToAction />
      </BallsBackground>
    </Footer>
    </>
  )
}

export default WebDesign