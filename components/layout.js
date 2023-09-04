import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../components/navbar.js"
import Banner from "../components/banner.js"
import Dropdown from './dropdown.js'

export const siteTitle = 'HackMUN'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="HackMUN"
          content="HackMUN's website"
        />
        <meta
          name="description"
          content="Hackley Model UN Website"
        />
        <meta
          property="og:description"
          content="Hackley Model UN Website"
        />
        <meta
          property="og:image"
          content="https://hackmun.org/images/hackmunpreview.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar />
        {/* <Banner /> */}
      </header>
      <main>{children}</main>
    </div>
  )
}