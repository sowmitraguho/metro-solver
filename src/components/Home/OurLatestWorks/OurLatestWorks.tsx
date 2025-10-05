'use client'
import React from 'react'
import Image from 'next/image'

// Sample images (replace with your own)
import img1 from '@/public/assets/work1.jpg'
import img2 from '@/public/assets/work2.jpg'
import img3 from '@/public/assets/work3.jpg'
import img4 from '@/public/assets/work4.webp'
import img5 from '@/public/assets/work5.jpg'
import img6 from '@/public/assets/work6.jpg'

const row1Images = [img1, img2, img3, img4, img5]
const row2Images = [img6, img1, img2, img3]
const row3Images = [img4, img5, img6, img1, img2]

export default function OurLatestWorks() {
    return (
        <section className="w-full py-20 bg-[#0B051B] flex flex-col gap-8">
            <div className='flex items-center justify-between'>
                <h2 className="flex-1 text-[64px] font-semibold text-white mb-8">
                    Our Latest Works
                </h2>
                <p className="flex-1 text-md text-white">Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business</p>
            </div>

            {/* Row 1 */}
            <div className="overflow-hidden">
                <div className="flex gap-[32px] animate-marquee-right">
                    {[...row1Images, ...row1Images].map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[296px] h-[296px] rounded-[24px] overflow-hidden">
                            <Image src={img} alt={`Work ${idx}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden">
                <div className="flex gap-[32px] animate-marquee-left">
                    {[...row2Images, ...row2Images].map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[405px] h-[600px] rounded-[24px] overflow-hidden">
                            <Image src={img} alt={`Work ${idx}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3 */}
            <div className="overflow-hidden">
                <div className="flex gap-[32px] animate-marquee-right">
                    {[...row3Images, ...row3Images].map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[296px] h-[296px] rounded-[24px] overflow-hidden">
                            <Image src={img} alt={`Work ${idx}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Marquee Animations */}
            <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 30s linear infinite;
        }
      `}</style>
        </section>
    )
}
