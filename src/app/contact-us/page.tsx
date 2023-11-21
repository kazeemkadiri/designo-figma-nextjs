import React from 'react'
import ContainerPadding from '@/components/ContainerPadding/ContainerPadding'
import BallsBackground from '@/components/BallsBackground/BallsBackground'
import CountryItem from '@/components/CountryItem/CountryItem'
import ContactUsFooter from './components/ContactUsFooter/ContactUsFooter'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <div>
        {/* Contact-us form */}
        <ContainerPadding>
            <div className='w-full lg:h-[30rem]'>
                <BallsBackground className="w-full h-full md:bg-[url(/images/contact-us/bg-circle.webp)] lg:bg-[position:bottom_0px_left_0px] lg:bg-[length:57.15%_100%] md:bg-[position:top_0rem_right_170px] md:bg-[length:100%_79%] max-md:bg-[url('/images/contact-us/bg-mobile.webp')] max-md:bg-cover bg-no-repeat bg-cover lg:px-[8.55%] ">
                    <div className='lg:w-full h-full flex lg:flex-row lg:items-center flex-col justify-center md:py-[4.4375rem] max-md:w-[87.2%] max-md:ml-[6.4%] max-md:py-[4.5rem]'>
                        <section className='contact-us-text-info lg:w-[58.69%] lg:-mt-4 lg:h-auto md:w-[83.16%] md:max-lg:ml-[7.55%]'>
                            <h3 className='md:text-start text-center md:text-[3rem] max-md:text-[2rem] text-white'>Contact Us</h3>
                            <p className='text-base text-white leading-[26px] mt-8 lg:w-[82.40%] max-md:text-center'>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
                        </section>
                        <section className='form lg:w-[41.31%] lg:h-auto md:w-[83.16%] md:max-lg:mt-10 md:max-lg:ml-[7.55%] max-md:w-full max-md:mt-12'>
                            <form className='w-full h-full flex flex-col md:items-end max-md:items-center'>
                                <input type='text' placeholder='Name' className='w-full border-0 border-b-[1px] border-white text-white bg-transparent indent-4 mb-6 h-[2.375rem] focus-visible:outline-0 placeholder:text-white pb-4' />

                                <input type='email' placeholder='Email' className='w-full border-0 border-b-[1px] border-white text-white bg-transparent indent-4 mb-6 h-[2.375rem] focus-visible:outline-0 placeholder:text-white pb-4' />

                                <input type='text' placeholder='Phone' className='w-full border-0 border-b-[1px] border-white text-white bg-transparent indent-4 mb-6 h-[2.375rem] focus-visible:outline-0 placeholder:text-white pb-4' />

                                <textarea placeholder='Your Message' className='w-full border-0 border-b-[1px] border-white text-white bg-transparent indent-4 md:mb-6 max-md:mb-10 h-[6.375rem] focus-visible:outline-0 placeholder:text-white pb-4'></textarea>

                                <button type="button" className='bg-white py-4 px-12 rounded-lg lg:w-[152px]'>SUBMIT</button>
                            </form>
                        </section>
                    </div>
                </BallsBackground>
            </div>
        </ContainerPadding>
        {/* End Contact-us form */}

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
                        iconClasses="rotate-[-90deg]"
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

        {/* Footer */}
        <ContactUsFooter />
      {/* End Footer */}
    </div> 
  )
}

export default ContactUs