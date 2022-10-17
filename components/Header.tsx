import Link from 'next/link'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export const Header: React.FunctionComponent = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if ( window.scrollY > 0 ) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden md:flex md:space-x-4">
                    <li className="header-link">Home</li>
                    <li className="header-link">TV Shows</li>
                    <li className="header-link">Movies</li>
                    <li className="header-link">New & Popular</li>
                    <li className="header-link">My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm font-light'>
                <MagnifyingGlassIcon className='hidden sm:inline sm:w-6 sm:h-6' />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='sm:w-6 sm:h-6' />
                <Link href='/account'>
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}