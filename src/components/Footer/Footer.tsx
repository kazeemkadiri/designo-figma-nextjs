import Link from "next/link"
import { ICommonProps } from "../../../interfaces/interfaces"
import { cn } from "@/lib/utils"

const Footer = ({children, className}: ICommonProps) => {
  return (
    <footer className={cn(`lg:w-full lg:h-auto relative lg:z-50 flex justify-center md:h-[42.9375rem] md:bg-none md:items-end md:pt-0 w-full`, className)}>
      <div className="wrapper lg:w-full lg:h-[24.5625rem] lg:bottom-0 lg:relative lg:px-[var(--site-container-padding)] bg-[var(--site-black)] md:h-[61.57%] md:w-full md:px-[var(--site-tablet-container-padding)] px-[1.5rem] w-full h-full md:pb-0 md:mt-0 md:pt-0 pt-[15.8125rem]">
        <article className="lg:top-[36.64%] w-full lg:h-[45%] relative z-10 flex flex-col justify-between lg:px-0 md:top-[39.24%] md:h-[41.84%]">
          <div className="flex md:justify-between md:items-center md:flex-row md:gap-0 w-full flex-col gap-[2rem]">
            <Link href="/" className="flex flex-row justify-start max-md:justify-center">
              <img src="/images/logo-white.svg" alt="site logo" className="md:h-auto h-[1.6875rem]" />
            </Link>

            <hr className="md:mt-[5.79%] md:mb-[7.32%] w-full md:h-[1px] text-[#979797] md:hidden flex" />

            <ul className="lg:w-[38%] flex md:justify-between md:w-[53.62%] md:gap-[11.35%] md:flex-row gap-[2rem] flex-col items-center">
              <li className="text-white text-[0.875rem]"><Link href="/about-us">OUR COMPANY</Link></li>
              <li className="text-white text-[0.875rem]"><Link href="/locations">LOCATIONS</Link></li>
              <li className="text-white text-[0.875rem]"><Link href="/contact-us">CONTACT</Link></li>
            </ul>
          </div>
          
          <hr className="md:mt-[5.79%] md:mb-[7.32%] w-full md:h-[1px] text-[#979797] md:flex hidden" />

          <div className="w-full flex md:justify-between md:flex-row flex-col">
            <div className="lg:w-[65.7%] flex md:justify-start md:w-[73%] md:flex-row flex-col items-center">
              <section className="md:w-[50%] leading-[1.625] flex flex-col md:items-start items-center md:mt-0 mt-[2.5rem]">
                <h6 className="text-[#979797] text-base font-bold">Designo Central Office</h6>
                <p className="text-[#979797] text-base font-normal">3886 Wellington Street </p>
                <p className="text-[#979797] text-base font-normal">Toronto, Ontario M9C 3J5</p>
              </section>

              <section className="md:w-[50%] lg:ml-[1.875rem] md:ml-0 leading-[1.625] flex flex-col md:items-start items-center md:mt-0 mt-[2.5rem]">
                <p className="text-[#979797] text-base font-bold">Contact Us (Central Office) </p> 
                <p className="text-[#979797] text-base font-normal md:font-bold">P : +1 253-863-8967 </p>
                <p className="text-[#979797] text-base font-normal md:font-bold">M : contact@designo.co</p>
              </section>
            </div>

            <section className="flex md:justify-end items-end relative right-0 bottom-0 lg:w-[34.29%] gap-[1rem] h-full md:w-[26.66%] md:ml-[7.24%] md:mt-0 mt-[2.5rem] justify-center md:pb-0 pb-16">
              <img src="/images/icon-facebook.svg" alt="facebook icon" className="h-[1.5rem] cursor-pointer" />
              <img src="/images/icon-youtube.svg" alt="youtube icon" className="h-[1.5rem] cursor-pointer" />
              <img src="/images/icon-twitter.svg" alt="twitter icon" className="h-[1.5rem] cursor-pointer" />
              <img src="/images/icon-pinterest.svg" alt="pinterest icon" className="h-[1.5rem] cursor-pointer" />
              <img src="/images/icon-instagram.svg" alt="instagram icon" className="h-[1.5rem] cursor-pointer" />
            </section>
          </div>
        </article>
        </div>

        { children }
    </footer>
  )
}

export default Footer