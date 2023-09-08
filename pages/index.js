import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from "../components/navbar.js"
import Layout, { siteTitle } from "../components/layout.js"

// todo
/*
 convert the <a> and <img> stuff to link and image
*/

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{"Home - " + siteTitle}</title>
      </Head>

      <div className="py-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
        <div className="flex items-center w-full">
          <div className="mb-8 w-full">

            <div className="relative bg-white overflow-hidden">
              <div className="max-w-8xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                  <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>

                  <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl">
                        <span className="block xl text-sky-500">HackMUN V</span>{' '}
                        <span className="block xl:inline sm:text-3xl md:text-5xl">March 2, 2024</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        The Hackley Model United Nations Club is planning to host the fifth annual Hackley Model United Nations conference on March 2nd, 2024. On behalf of the secretariat, we look forward to seeing you on campus in the spring!
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <Link href="/conference">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10">
                              Conference
                            </a>
                          </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link href="/committees">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-500 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">
                              Committees
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 max-w-7xl mx-auto">
                {/* javascript weird, need to keep img, not Image */}
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="/images/hackmun.jpeg"
                  alt="HackMUN"
                />
              </div>
            </div>

            <br />


          </div>
        </div>
      </div>


    </Layout>
  )
}
