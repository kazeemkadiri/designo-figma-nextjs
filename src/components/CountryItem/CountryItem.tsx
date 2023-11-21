import { cn } from '@/lib/utils';
import React from 'react'

interface ICountryItem{
  icon: string;
  title: string;
  iconClasses?: string;
}

const CountryItem = ({icon, title, iconClasses}: ICountryItem) => {
  return (
    <section className='flex flex-col items-center justify-between'>
        <img src={icon} className={cn(`h-[12.625rem] w-[12.625rem]`, iconClasses)}/>
        <h5 className='mt-12 mb-8 tracking-[5px] text-[var(--site-dark-grey)] text-[1.25rem] text-center'>{title}</h5>
        <button className='w-[152px] h-14 rounded-lg bg-[var(--site-peach)] text-white hover:bg-[var(--site-transparent-peach)]'>SEE LOCATION</button>
    </section>
  )
}

export default CountryItem