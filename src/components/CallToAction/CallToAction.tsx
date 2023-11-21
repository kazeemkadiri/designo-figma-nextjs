const CallToAction = () => {
  return (
    <>
        <section className="lg:h-full lg:w-1/2 flex flex-col justify-center items-center md:w-[83%]">
            <h2 className="text-white md:text-[2.5rem] md:leading-[1.1] lg:w-full lg:text-start md:w-[58.46%] text-center text-[2rem] font-medium leading-[1.125]">Let's talk about your project</h2>
            <p className="text-white md:text-base lg:mt-[0.5rem] lg:text-start lg:w-full md:w-[83.04%] md:leading-[unset] text-center mt-4 text-[0.9375rem] leading-[1.667]">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </section>
        
        <section className="lg:w-1/2 flex lg:justify-end lg:mt-0 items-center md:w-[83%] mt-8 w-full justify-center">
            <button className="hover:bg-[var(--site-light-peach)] hover:text-white bg-white text-[var(--site-dark-grey)] py-[1.0625rem] px-[1.125rem] md:h-auto md:w-auto md:text-base rounded-md w-[46.4%] h-[3.5rem] text-[0.9375rem]">GET IN TOUCH</button>
        </section>
            
    </>
  )
}

export default CallToAction