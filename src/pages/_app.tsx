import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

import '../styles/globals.css'
import logo from "../assets/logo.svg"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>


      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link href="/">
          <Image src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link href="create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2  rounded-md" >
          Create
        </Link>
      </header>

      <Component {...pageProps} />


    </>
  );
}
