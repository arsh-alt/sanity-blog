import React, { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Component {...pageProps} isOpen={isOpen} />
        </>
    )
}

export default MyApp