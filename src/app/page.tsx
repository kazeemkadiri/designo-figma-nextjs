import BallsBackground from "@/components/BallsBackground/BallsBackground";
import CallToAction from "@/components/CallToAction/CallToAction";
import ContainerPadding from "@/components/ContainerPadding/ContainerPadding";
import Footer from "@/components/Footer/Footer";
import QualityCard from "@/components/QualityCard/QualityCard";
import QualityDescription from "@/components/QualityCard/QualityDescription/QualityDescription";
import QualityImage from "@/components/QualityCard/QualityImage/QualityImage";
import QualityTitle from "@/components/QualityCard/QualityTitle/QualityTitle";
import ActionText from "@/components/SkillCard/ActionText/ActionText";
import SkillCard from "@/components/SkillCard/SkillCard";
import SkillTitle from "@/components/SkillCard/SkillTitle/SkillTitle";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:bg-[url('/images/hero-bg.svg'),_url('/images/qualities-bg.svg')] bg-no-repeat bg-[length:69.86%] bg-[position:left_0rem_top_20rem,_right_0rem_top_109.0175rem]">
      {/* Hero start */}
      <ContainerPadding>
        <Card className="w-full lg:h-[40rem] z-10 md:h-[52.6875rem] h-[52.6875rem] bg-[var(--site-peach)] lg:px-[8.5%] md:px-0 rounded-[15px] relative flex md:items-center md:overflow-x-hidden lg:overflow-x-auto max-lg:flex-col px-[1.5rem] overflow-hidden max-lg:justify-center max-lg:items-center max-md:justify-between bg-[url('/images/hero-oval.svg')] lg:bg-[position:right_0px_top_0px] bg-no-repeat md:bg-[position:left_170px_top_6.3125rem] bg-[position:left_0rem_top_6.375rem] max-md:rounded-none">
          <div className="lg:relative lg:max-w-[61.105rem] lg:h-full flex lg:flex-row lg:mt-[-0.1%] md:justify-between z-10 flex-col w-full h-[52.6875rem] md:absolute md:items-center md:overflow-y-hidden md:mt-0 sm:w-full absolute px-[1.5rem] items-center justify-between max-md:mt-[5rem] left-0"> 
          {/* Hero Text */}
          <div className="md:max-w-[29.7rem] md:h-auto relative flex flex-col justify-between lg:text-start lg:items-start lg:pr-6 md:text-center md:items-center md:max-lg:mb-[8.18%] md:max-lg:top-[7.11%] text-center items-center h-[19.5rem]">
            <h1 className="lg:text-start md:text-[3rem] md:text-center text-white leading-[1] text-[2rem] text-center">Award-winning custom designs and digital branding solutions</h1>
            <p className="lg:text-start text-white leading-[1.6] md:mt-[0.6875rem] md:text-center mt-[0.875rem] text-center">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

            <button className="text-[var(--site-dark-grey)] bg-white px-[1.3475rem] py-[1.0625rem] rounded-[0.5rem] relative h-[3rem] md:mt-[0.6875rem] w-max flex items-center mt-[1.5rem]">LEARN MORE</button>
          </div>
        </div>

        {/* Hero Mobile Phone */}
        <img src="/images/hero-mobile.svg" className="absolute h-auto lg:relative lg:top-[unset] lg:h-[35.8125rem] lg:w-auto lg:bottom-[-6rem] bottom-0 md:top-[28.4375rem] w-[15.9242rem] max-lg:right-[unset] top-[29.5rem] z-10" />
        </Card>
      </ContainerPadding>
      
      {/* Hero section end */}

       {/* Skills start */}
      <ContainerPadding>
        <section className="projects-container flex lg:flex-row lg:justify-between lg:px-0 relative z-20 md:flex md:flex-col md:gap-[1.5rem] md:mt-[7.5rem] px-[1.5rem] flex-col mt-[7.5rem]">
        <Link href="web-design" className="lg:w-[51.31%] w-full h-full z-20 relative">
          <SkillCard className="bg-[url('/images/laptop.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-[40rem] md:h-[12.5rem] md:bg-bottom bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] mb-[1.5rem]  relative z-20">
            <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
              <SkillTitle className="z-40">WEB DESIGN</SkillTitle>
              <ActionText className="z-40">VIEW PROJECTS</ActionText>
            </div>
          </SkillCard>
        </Link>

          <div className="lg:w-[48.69%] flex flex-col justify-between md:w-full md:gap-[1.5rem]">
          <Link href="app-design" className="w-full lg:h-[19.25rem] z-20 relative">
            <SkillCard className="bg-[url('/images/mobile-phone.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-full md:h-[12.5rem] md:bg-bottom bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] mb-[1.5rem] flex flex-col justify-center items-center relative z-20">
            <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
              <SkillTitle className="z-40">APP DESIGN</SkillTitle>
              <ActionText className="z-40">VIEW PROJECTS</ActionText>
            </div>
            </SkillCard>
          </Link>

          <Link href="graphic-design" className="w-full lg:h-[19.25rem] z-20 relative">
            <SkillCard className="bg-[url('/images/cables.webp')] bg-[var(--site-transparent-dark)] w-full lg:h-full md:h-[12.5rem] md:bg-bottom bg-no-repeat bg-cover md:bg-cover md:mb-0 h-[15.625rem] mb-[1.5rem] flex flex-col justify-center items-center relative z-20">
            <div className="overlay absolute w-full h-full hover:bg-[var(--site-transparent-peach)] z-30 top-0 flex flex-col justify-center items-center">
              <SkillTitle className="z-40">GRAPHIC DESIGN</SkillTitle>
              <ActionText className="z-40">VIEW PROJECTS</ActionText>
            </div>
            </SkillCard>
          </Link>
          </div>
        </section>
      </ContainerPadding>
       {/* Skills end */}

       {/* Qualities start */}
       <ContainerPadding>
       <section 
        className="lg:mt-[10rem] mt-[7.5rem] md:h-[41rem] px-[1.5rem] h-[87.25rem]" 
        >
          <div className="lg:h-[25.75rem] lg:gap-[1.875rem] lg:flex-row flex justify-between md:flex-col md:gap-0 flex-col gap-[5rem]">
            <QualityCard className="lg:h-full md:w-full md:flex lg:mt-0 md:mt-8 h-auto mt-0">
              <QualityImage src="/images/first-quality.svg" />
              <div className="content lg:mt-12 lg:ml-0 lg:justify-start md:h-full flex md:flex-col md:justify-center md:items-center md:ml-12 text-center justify-center flex-col">
                <QualityTitle>PASSIONATE</QualityTitle>
                <QualityDescription>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</QualityDescription>
              </div>
            </QualityCard>

            <QualityCard className="lg:h-full md:w-full md:flex lg:mt-0 md:mt-8 h-auto mt-0">
              <QualityImage src="/images/second-quality.svg" />
              <div className="content lg:mt-12 lg:ml-0 lg:justify-start md:h-full flex md:flex-col md:justify-center md:items-center md:ml-12 text-center justify-center flex-col">
                <QualityTitle>RESOURCEFUL</QualityTitle>
                <QualityDescription>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.</QualityDescription>
              </div>
            </QualityCard>

            <QualityCard className="lg:h-full md:w-full md:flex lg:mt-0 md:mt-8 h-auto mt-0">
              <QualityImage src="/images/third-quality.svg" />
              <div className="content lg:mt-12 lg:ml-0 lg:justify-start md:h-full flex md:flex-col md:justify-center md:items-center md:ml-12 text-center justify-center flex-col">
                <QualityTitle>FRIENDLY</QualityTitle>
                <QualityDescription>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</QualityDescription>
              </div>
            </QualityCard>
          </div>
        </section>
       </ContainerPadding>
       {/* Qualities end */}

       <Footer className="lg:mt-[4.625rem] md:mt-[6.375rem] mt-[7.5rem] h-[62.8125rem] pt-[11.875rem]">
        <BallsBackground
          className="z-20 lg:w-[77.15%] lg:h-[18.25rem] lg:bottom-[20.0625rem] lg:top-[unset] lg:left-auto lg:right-auto absolute lg:px-[8.55%] lg:py-[4.5rem] flex lg:flex-row lg:justify-between lg:items-center md:bottom-[21.0625rem] md:h-[21.875rem] md:w-[89.84%] md:flex-col md:justify-center md:items-center w-[87.2%] right-[6.4%] h-[23.6875rem] md:px-0 px-6 flex-col md:py-0 py-16 top-0 md:bg-[url('/images/call-to-action-bg.svg')] bg-[url('/images/footer-balls-background.webp')] rounded-[0.9375rem] leading-[1.5625rem] bg-no-repeat">
          <CallToAction />
        </BallsBackground>
      </Footer>
      </main>
  )
}
