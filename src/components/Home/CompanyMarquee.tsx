'use client'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import motorolaLogo from '@/public/assets/motorola.png'
import liminosLogo from '@/public/assets/luminus.png'
import bremboLogo from '@/public/assets/brembo.png'

const brands = [
    { name: 'Motorola', logo: motorolaLogo },
    { name: 'Luminus', logo: liminosLogo },
    { name: 'Brembo', logo: bremboLogo },
]

export default function CompanyMarquee() {
    return (
        <div className="overflow-hidden relative w-[1570px] h-[84px] -left-[65px]">
            <div className="flex animate-marquee gap-[50px]">
                {/** Repeat 2 times to create infinite scrolling effect */}
                {[...brands, ...brands].map((brand, idx) => (
                    <Card
                        key={idx}
                        className="w-88 h-16 flex items-center justify-center gap-[10px] 
                       px-[47px] py-[20px] rounded-full bg-white/5 backdrop-blur-[200px] opacity-100 border-none"
                    >
                        <CardContent className="flex items-center gap-[10px] p-0 bg-transparent shadow-none">
                            <Image src={brand.logo} alt={brand.name} className="object-contain rounded-full w-full h-full p-2" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/** Tailwind animation */}
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </div>
    )
}
