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

const AppDesign = () => {
  return (
    <>
    <ContainerPadding>
      {/* Background image behind BallsBackground component */}
      <div className="lg:absolute lg:w-full lg:h-[37.125rem] lg:bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-cover lg:left-0 lg:top-[17.5625rem] lg:bg-[length:69.86%_100%] z-0"></div>
      
      {/* App Design Hero */}
      <BallsBackground className="relative w-full md:h-[15.75rem] z-20 md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/hero-single-circle.webp')] bg-no-repeat bg-cover max-md:h-80">
        <div className="w-full flex flex-col justify-center items-center h-full">
          <h3 className="md:text-[3rem] text-white text-[2rem] font-medium">App Design</h3>
          <p className="text-white mt-[1.5rem] md:w-[65.7%] md:px-[5.2%] text-center text-[0.9375rem] w-full px-6">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
        </div>
      </BallsBackground>

      {/* App design projects */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-[1.875rem] lg:mt-40 relative z-20 md:flex md:flex-col md:mt-[6.75rem] mt-24 grid grid-cols-1 place-items-center">
        <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10 items-center justify-end overflow-hidden rounded-[0.9375rem]">
            <ImageContainer className="w-full bg-[#2E3947] flex items-end justify-center">
                <ProjectImage className="bg-[url('/images/app-design/air-filter.webp')] !bg-[length:101%_100%] w-[52.59%] h-[84.37%] lg:!bg-cover bg-[length: 100%] bg-no-repeat bg-cover lg:bg-center" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>AIRFILTER</ProjectTitle>
                <ProjectDescription>Solving the problem of poor indoor air quality by filtering the air</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10 items-center justify-end overflow-hidden rounded-[0.9375rem]">
            <ImageContainer className="w-full bg-[#34B7A2] flex items-end justify-center">
                <ProjectImage className="bg-[url('/images/app-design/eye-cam.webp')] !bg-[length:101%_100%] w-[52.59%] h-[84.37%] bg-no-repeat lg:bg-center" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>EYECAM</ProjectTitle>
                <ProjectDescription>Product that lets you edit your favorite photos and videos at any time</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-8 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10 items-center justify-end overflow-hidden rounded-[0.9375rem]">
            <ImageContainer className="w-full bg-[#3F2F83] flex items-end justify-center">
                <ProjectImage className="bg-[url('/images/app-design/faceit.webp')] !bg-[length:101%_100%] w-[52.59%] h-[84.37%] bg-no-repeat lg:bg-center" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>FACEIT</ProjectTitle>
                <ProjectDescription>Get to meet your favorite internet superstar with the faceit app</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>
         
          <ProjectCard className="project-card lg:mb-0 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-[2rem] flex-col w-[87.2%] mb-10 items-center justify-end overflow-hidden rounded-[0.9375rem]">
            <ImageContainer className="w-full bg-[#40125A] flex items-end justify-center">
                <ProjectImage className="bg-[url('/images/app-design/todo.webp')] !bg-[length:101%_100%] w-[52.59%] h-[84.37%] bg-no-repeat lg:bg-center" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>TODO</ProjectTitle>
                <ProjectDescription>A todo app that features cloud sync with light and dark mode</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>

          <ProjectCard className="project-card lg:mb-0 md:max-lg:flex-row md:max-lg:h-[19.375rem] md:max-lg:w-full md:mb-0 flex-col w-[87.2%] items-center justify-end overflow-hidden rounded-[0.9375rem]">
            <ImageContainer className="w-full bg-[#853A4D] flex items-end justify-center">
                <ProjectImage className="bg-[url('/images/app-design/loop-studios.webp')] !bg-[length:101%_100%] w-[52.59%] h-[84.37%] bg-no-repeat lg:bg-center" />
            </ImageContainer>
            <DescriptionContainer>
                <ProjectTitle>LOOPSTUDIOS</ProjectTitle>
                <ProjectDescription>A VR experience app made for Loopstudios</ProjectDescription>
            </DescriptionContainer>
          </ProjectCard>
      </div>
    </ContainerPadding>
    
    <ContainerPadding>
      {/* Other Projects */}
      <section className="flex w-full lg:justify-between lg:gap-[2.6%] lg:flex-row lg:mt-40 flex-col md:my-[7.5rem] gap-6 md:px-0 items-center mt-[6.875rem]">
        
        <Link href="web-design" className="lg:h-[19.25rem] lg:w-[29.75rem] md:h-[12.5rem] md:w-full h-[15.625rem] w-[87.2%] rounded-[15px] relative overflow-hidden flex flex-col justify-center items-center">
          <SkillCard className="bg-[url('/images/laptop.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-full md:h-[12.5rem] md:bg-bottom bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] flex flex-col justify-center items-center relative z-20">
          <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
            <SkillTitle className="z-40">WEB DESIGN</SkillTitle>
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

export default AppDesign