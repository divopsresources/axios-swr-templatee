import React from 'react';
import Image from 'next/image';
import CustomLink from './CustomLink';

import GreenButton from './buttons/GreenButton';
import HomeButton from './buttons/HomeButton';

function BlogList() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">

            {/* Main content */}
            <div className="lg:flex-grow" data-aos="fade-down" data-aos-delay="200">

              {/* Section title */}
              <h4 className="h3 font-red-hat-display mb-8">Latest</h4>

              {/* Articles container */}
              <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-6 md:gap-y-8 items-start">

                {/* 1st article */}
                <article className="flex flex-col h-full">
                  <header>
                    <CustomLink className="block mb-4" to="/season/1960" >
                      <figure className="relative h-0 pb-9/16">
                        <Image className="transition-opacity duration-300" src={'/images/news-01.jpg'} width="540" height="460" alt="Carousel item 01" />
                      </figure>
                    </CustomLink>
                    <p className="text-gray-400 dark:text-gray-400 flex-grow">Post #1</p>
                    <CustomLink className="hover:underline" to="/season/1960">
                      <h3 className="h4 font-red-hat-display mb-2 text-white dark:text-white">
                        1960
                      </h3>
                    </CustomLink>
                  </header>
                  <div className="flex items-center mt-4">
                    <div className="text-sm dark:text-gray-500 text-gray-500">
                      By <a className="font-medium text-gray-400 dark:text-gray-400 dark:hover:text-indigo-100">Johnny Joe</a> · <span className="text-teal-500 dark:text-gold-200">Nov 28th, 2021</span>
                    </div>
                  </div>
                </article>

                {/* 2nd article */}
                <article className="flex flex-col h-full">
                  <header>
                    <CustomLink className="block mb-4" to="/season/1964" >
                      <figure className="relative h-0 pb-9/16">
                        <Image className="transition-opacity duration-300" src={'/images/blog-post-03.jpg'} width="540" height="460" alt="Carousel item 01" />
                      </figure>
                    </CustomLink>
                    <p className="text-gray-400 dark:text-gray-400 flex-grow">Post #2</p>
                    <CustomLink className="hover:underline" to="/season/1964">
                      <h3 className="h4 font-red-hat-display mb-2 text-white dark:text-white">
                        1964
                      </h3>
                    </CustomLink>
                  </header>
                  <div className="flex items-center mt-4">
                    <div className="text-sm dark:text-gray-500 text-gray-500">
                      By <a className="font-medium text-gray-400 dark:text-gray-400 dark:hover:text-indigo-100">Johnny Joe</a> · <span className="text-teal-500 dark:text-gold-200">Dec, 5th 2021</span>
                    </div>
                  </div>
                </article>

              </div>

              <div>
                <GreenButton />
                <br />
                <HomeButton />
                <br />
              </div>

            </div>

            {/* Sidebar */}
            <aside className="relative mt-12 lg:mt-0 lg:w-64 lg:ml-16 lg:flex-shrink-0" data-aos="fade-down" data-aos-delay="400">

              {/* Popular posts */}
              {/* Trending 1 Post 1 */}
              <div className="mb-8">
                <h4 className="flex flex-grow justify-center h4 font-red-hat-display mb-5 text-gray-400 dark:text-gray-400">Trending ND </h4>
                <ul className="-my-3">
                  <li className="flex py-3 border-b border-gray-600 dark:border-gray-600">
                    <div className="h4 w-12 font-red-hat-display text-gray-600 dark:text-gray-600 flex-shrink-0 mt-1">01</div>
                    <span className="h4 w-12 font-red-hat-display text-teal-500 dark:text-gold-200 hover:text-teal-500 dark:hover:text-gold-200 flex-shrink-0 mt-0">️‍🔥</span>
                    <article>
                      <CustomLink className="hover:underline" to="/season/1960">
                        <h3 className="text-xl font-red-hat-display font-bold tracking-tight mb-1 text-white dark:text-white">
                          1960
                        </h3>
                      </CustomLink>
                      <div className="text-sm text-gray-500">
                        By <a className="font-medium text-gray-400 dark:text-gray-400 hover:underline">Johnny Joe </a> <span className="text-teal-500 dark:text-gold-200">Nov, 2nd 2021</span>
                      </div>
                    </article>
                  </li>

                  {/* Trending 2 News 1*/}
                  <li className="flex py-3 border-b border-gray-600 dark:border-gray-600">
                    {/* <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">02</div> */}
                    <div className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 flex-shrink-0 mt-1">News</div>
                    <span className="h4 w-12 font-red-hat-display text-gray-400 dark:text-gray-600 dark:hover:text-teal-500 flex-shrink-0 mt-0">️</span>
                    <article>
                      <CustomLink className="hover:underline" to="/season/1960">
                        <h3 className="font-red-hat-display font-bold tracking-tight mb-1">
                          Notre Dame hires new head coach; defensive coordinator, Marcus Freeman.
                        </h3>
                      </CustomLink>
                      <div className="text-sm text-gray-500">
                        By <a className="font-medium text-gray-400 dark:text-gray-400 hover:underline" href="blog/#/__/nd-blog-bot">ND Blog Bot</a>
                        <br />
                        <span className="text-teal-500 dark:text-gold-200">Nov, 2nd 2021</span>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;