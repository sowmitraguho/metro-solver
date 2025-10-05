'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Monitor, PenTool, Video, TrendingUp, Edit, Search, Box, ShoppingCart, FileText, Globe, Key, Shield, BookOpen } from 'lucide-react'
import Image from 'next/image'
import logo1 from '@/public/assets/logo1.png'
import logo2 from '@/public/assets/logo2.png'
import logo3 from '@/public/assets/logo3.png'
import logo4 from '@/public/assets/logo4.png'
import logo5 from '@/public/assets/logo5.png'
import logo6 from '@/public/assets/logo6.png'
import logo7 from '@/public/assets/logo7.png'
import logo8 from '@/public/assets/logo8.png'
import logo9 from '@/public/assets/logo9.png'
import logo10 from '@/public/assets/logo10.png'
import logo11 from '@/public/assets/logo11.png'
import logo12 from '@/public/assets/logo12.png'
import logo13 from '@/public/assets/logo13.png'
import logo14 from '@/public/assets/logo14.png'
import logo15 from '@/public/assets/logo15.png'

const services = [
    { title: "Graphic Design", logo: logo1 },
    { title: "Web & Software Development", logo: logo2 },
    { title: "Multimedia and Video Editing", logo: logo3 },
    { title: "Digital Marketing", logo: logo4 },
    { title: "Creative Writing Solution", logo: logo5 },
    { title: "SEO", logo: logo6 },
    { title: "3D Animation & Solution", logo: logo7 },
    { title: "E-commerce Solution", logo: logo8 },
    { title: "Accounting", logo: logo9 },
    { title: "Special Combo", logo: logo10 },
    { title: "Premium Website", logo: logo11 },
    { title: "Premium Domains", logo: logo12 },
    { title: "Proxy", logo: logo13 },
    { title: "Merchandise", logo: logo14 },
    { title: "Academy", logo: logo15 },
]

export default function OurServices() {
    return (
        <section className="w-full py-20 bg-[#11061C] flex flex-col items-center">

            {/* Heading */}
            <h2 className="text-[64px] font-semibold mb-4 text-white text-center">
                Our Services
            </h2>
            <p className='text-lg text-white mb-16 text-center max-w-3xl'>
                Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
                {services.map((service, idx) => (
                    <Card key={idx} className="bg-[#1E112D] border-0 rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-gradient-to-br from-[#361A67] via-[#1e1c36] to-[#361A67]">
                        <CardContent className="flex flex-col gap-4 p-6">

                            {/* Logo / Icon */}
                            <div className="flex">
                                <Image
                                    src={service.logo}
                                    alt={service.title}
                                    className="object-contain w-10 h-10"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white">{service.title}</h3>

                            {/* Description */}
                            <p className="text-white text-sm">
                                We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
                            </p>

                            {/* Read More Link */}
                            <a href="#" className="mt-2 flex items-center gap-1 text-[#C16EFD] font-medium hover:underline">
                                Read More <ArrowRight className="w-4 h-4" />
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
