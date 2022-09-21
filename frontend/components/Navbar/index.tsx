import React from 'react'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion'

type Props = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const linkItemStyle = 'font-bold text-4xl m-4 transittion-all'

const Navbar = (props: Props) => {
    const { isOpen, setIsOpen } = props
    const whileHoverProps = {
        scale: 1.1,
    }
    return (
        <motion.nav
            initial={{ opacity: 0, margin: -100 }}
            animate={{ opacity: 1, margin: 0, transition: { duration: 1 } }}
            className="flex justify-between m-4"
        >
            <div className={isOpen ? 'hidden' : ''}>
                <button className="m-4" onClick={() => setIsOpen(!isOpen)}>
                    <HiMenu size={30}/>
                </button>
            </div>
            <div
                className={`bg-yellow-400 fixed top-0 left-0 transition-all ${
                    isOpen ? 'w-full h-screen' : 'w-0 h-0'
                }`}
            >
                <div
                    className={
                        isOpen ? 'flex justify-center items-center' : 'hidden'
                    }
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="fixed top-0 left-0 m-4"
                    >
                        <HiMenu size={30}/>
                    </button>
                    <ul className="mt-40 flex flex-col text-center text-white">
                        <motion.li
                            whileHover={whileHoverProps}
                            className={linkItemStyle}
                        >
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={whileHoverProps}
                            className={linkItemStyle}
                        >
                            <Link href="/">
                                <a>About</a>
                            </Link>
                        </motion.li>

                        <motion.li
                            whileHover={whileHoverProps}
                            className={linkItemStyle}
                        >
                            <Link href="/">
                                <a>Contact</a>
                            </Link>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar