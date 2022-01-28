import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../components/navbar.js"

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
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>{children}</main>
    </div>
  )
}