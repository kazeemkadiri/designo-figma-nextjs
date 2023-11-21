"use client"

import { useEffect, useState } from "react";
import 
Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // For mobile view
  const toggleShowMenu = () => {
    // If the menu is open, the body should not be scrollable
    // Note: when the toggle button is clicked the menuOpen state is to be changed to its opposite state
    if(!menuOpen) removeBodyScroll();

    if(menuOpen) enableBodyScroll();
    
    setMenuOpen(!menuOpen);
  }

  const removeBodyScroll = () => {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  }

  const enableBodyScroll = () => {
    document.body.style.height = "auto";
    document.body.style.overflowY = "unset";
  }

  const hideMobileMenu = () => {
    setMenuOpen(false);
    enableBodyScroll();
  }

  return (
    <nav 
      id="main-nav" 
      className="w-full h-[8.42rem] flex justify-between items-center"
    >
        <Link href="/"><img src="/images/logo.svg" alt="site logo" className="z-10 md:ml-0 ml-6" onClick={hideMobileMenu} /></Link>

        <img 
          src={menuOpen ? '/images/close-button-mobile.svg' : '/images/hamburger.svg'} 
          alt="menu toggler" 
          className="md:hidden md:mr-0 mr-6 flex z-10"
          onClick={() => toggleShowMenu()}/>
        
        {/* Overlay shown only when menu is shown on mobile view */}
        {menuOpen &&
         <div 
          id="nav-overlay"
          onClick={hideMobileMenu}
          style={{
            width: "100%",
            height: "calc(100vh - 8.42rem)",
            position: "absolute",
            top: "8.42rem",
            background: "rgba(0,0,0,0.3)",
            zIndex: "9"
          }}></div>
        }
        {/* Overlay End */}

        {/* Mobile menu */}
        {menuOpen && 
          <ul 
            className="flex gap-[2.31rem] md:w-auto md:relative md:flex-row md:bg-transparent flex-col w-full absolute bg-[#FFF] md:top-0 top-[8.42rem] z-50 md:h-auto h-[200px] max-md:h-[14.6875rem] max-md:bg-[var(--site-black)] max-md:w-full max-md:pl-[6.4%] justify-center"
          >
              <li onClick={hideMobileMenu} className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/about-us">Our Company</Link></li>
              <li onClick={hideMobileMenu} className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/locations">Locations</Link></li>
              <li onClick={hideMobileMenu} className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/contact-us">Contact</Link></li>
          </ul>
        }
        {/* Mobile menu end */}

        {/* Desktop menu */}
        <ul 
          className="flex gap-[2.31rem] md:w-auto md:relative md:flex-row md:bg-transparent flex-col w-full absolute bg-[#FFF] md:top-0 top-[8.42rem] z-50 md:h-auto h-[200px] max-md:hidden"
        >
            <li className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/about-us">Our Company</Link></li>
            <li className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/locations">Locations</Link></li>
            <li className="md:text-[var(--site-dark-grey)] text-start text-white md:h-auto h-6 max-md:text-[1.5rem] max-md:uppercase max-md:cursor-pointer"><Link href="/contact-us">Contact</Link></li>
        </ul>
        {/* Desktop menu end */}
    </nav>
  )
} 

export default Navbar