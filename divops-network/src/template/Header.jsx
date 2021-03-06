import React, { useState, useRef, useEffect } from "react";
import CustomLink from "../components/CustomLink";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-transparent transition:bg-gray-800 blur shadow-lg"
      }`}
    >
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div>
            <div>
              <div className='flex-shrink-0 mr-4'>
                {/* Logo */}
                <CustomLink to='/' className='block' aria-label='Cruip'>
                  <svg
                    className='w-8 h-8'
                    viewBox='0 0 32 32'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <radialGradient
                        cx='21.152%'
                        cy='86.063%'
                        fx='21.152%'
                        fy='86.063%'
                        r='79.941%'
                        id='header-logo'
                      >
                        <stop stopColor='#4FD1C5' offset='0%' />
                        <stop stopColor='#81E6D9' offset='25.871%' />
                        <stop stopColor='#338CF5' offset='100%' />
                      </radialGradient>
                    </defs>
                    <rect
                      width='32'
                      height='32'
                      rx='16'
                      fill='url(#header-logo)'
                      fillRule='nonzero'
                    />
                  </svg>
                </CustomLink>
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className='flex flex-grow justify-start'>
            {/* Desktop sign in CustomLinks */}

            <ul className='flex flex-grow justify-start ml-0'>
              <li>
                <CustomLink
                  to='portal'
                  className='btn-sm text-gray-200 hover:text-teal-200 bg-transparent outline-white hover:bg-gray-800'
                >
                  <span>Comparison</span>
                </CustomLink>
              </li>
            </ul>

            <ul className='flex flex-grow justify-end flex-wrap transition sm:items-end'>
              <li>
                <div>
                  <a
                    className='btn-sm text-gray-200 hover:text-teal-200 bg-gray-900 outline-white hover:bg-gray-800'
                    href='https://portfolio.michaelcalendo.com'
                  >
                    Profile
                    <svg
                      className='w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1'
                      viewBox='0 0 12 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z'
                        fillRule='nonzero'
                      />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
