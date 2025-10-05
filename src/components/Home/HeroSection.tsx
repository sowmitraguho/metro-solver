import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import heroImage from '@/public/assets/Comp 1_4.gif'
import { Star } from 'lucide-react'

export default function HeroSection() {
    return (
        <div className='w-full flex justify-between items-stretch px-24 py-12 bg-gradient-to-r from-[#0B051B] to-[#110A2A]'>

            {/* Left Content */}
            <div className='flex-1 flex flex-col justify-center gap-8 max-w-[483px]'>
                <h2 className='font-semibold text-7xl text-white'>
                    Expert to Digitalise Your <span className='text-[#C16EFD]'>Growth</span>
                </h2>
                <p className='text-white'>
                    We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is
                </p>
                <div className="p-[1px] rounded-[200px] w-[278px] bg-gradient-to-r from-[#c16efd] to-white">
                    <Button className="w-[275px] h-[72px] py-5 px-12 text-white text-2xl font-semibold rounded-[200px] bg-gradient-to-b from-[#6331F1] to-[#9F63FF]">
                        <Star className="w-6 h-6 text-yellow-400" /> Explore Now
                    </Button>
                </div>
            </div>

            {/* Right Image */}
            <div className='flex-1 flex justify-end'>
                <Image
                    src={heroImage}
                    alt="Hero Image"
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}
