import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../../contants/movie"
import { Movie } from "../../types"
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/24/solid"

interface Props {
    netflixOriginals: [Movie]
}

export const Banner = ( {netflixOriginals}: Props ) => {
    const [movie, setMovie] = useState<Movie | null>(null)

    /* Fetches a random movie */
    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])
    
    return (
    <div className='flex flex-col py-16 lg:h-[75vh] lg:justify-center lg:pb-12'>
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <div className='absolute top-0 left-0 w-full h-full'></div>
            <Image src={`${baseUrl}${movie?.backdrop_path}`}
                layout='fill'
                objectFit='cover'
                quality={100}
                placeholder='blur'
                blurDataURL={`https://image.tmdb.org/t/p/w5${movie?.backdrop_path}`}
            />
        </div>
        <h1 className='text-xl font-bold mb-4 md:text-3xl lg:text-6xl'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className='max-w-xs text-xs text-shadow-md mb-8 md:max-w-lg md:text-base lg:max-w-2xl lg:text-xl'>{movie?.overview}</p>
        <div className='flex space-x-3'>
            <button className='banner-button bg-white text-black'><FaPlay className='h-4 w-4 text-black md:h-5 md:w-5' />Play</button>
            <button className='banner-button bg-[gray]/70'>
                More Info <InformationCircleIcon className='h-4 w-4 md:h-6 md:w-6' />
            </button>
        </div>
    </div>
    )
}