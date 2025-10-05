"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Users, Gift, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      {/* Avatar */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <Avatar className="w-10 h-10 border-2 border-[#C16EFD]">
          <AvatarImage src="/user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* Dropdown Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-4 w-[360px] bg-[#FFFFFF0A] backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-lg"
          >
            {/* User Info */}
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-16 h-16 border-2 border-[#C16EFD]">
                <AvatarImage src="/user.jpg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <h3 className="mt-3 font-semibold text-lg">John Doe</h3>
              <p className="text-sm text-gray-300">john.doe@email.com</p>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" className="rounded-full px-6">Website</Button>
                <Button className="rounded-full bg-[#C16EFD] hover:bg-[#a553d8]">Dashboard</Button>
              </div>
            </div>

            {/* Navlinks Container */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 bg-[#FFFFFF0A] rounded-full p-4 border border-[#ffffff1a]" 
              style={{
                width: "684px",
                height: "76px",
                borderRadius: "100px",
              }}>
              {[
                { icon: User, label: "Profile" },
                { icon: Users, label: "Referrals" },
                { icon: Gift, label: "Rewards", badge: "438 points" },
                { icon: LogOut, label: "Logout" },
              ].map((item, i) => (
                <Link key={i} href="#" className="flex items-center gap-2 px-8 py-2 rounded-full border border-transparent hover:border-[1.5px] hover:border-[#C16EFD] transition-all">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-[#C16EFD] rounded-full px-2 py-[1px] ml-1">{item.badge}</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
