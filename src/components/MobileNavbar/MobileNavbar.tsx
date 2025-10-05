"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, ClipboardList, Bookmark, Info, Headphones } from "lucide-react"

export default function MobileNavbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/services", icon: ClipboardList, label: "Services" },
    { href: "/saved", icon: Bookmark, label: "Saved" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/support", icon: Headphones, label: "Support" },
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0D0D0D] border-t border-white/10 backdrop-blur-md flex justify-around items-center py-2 z-50 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center relative"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-tr from-[#9b5cff] to-[#C16EFD] text-white shadow-[0_0_12px_#C16EFD90]"
                  : "text-gray-400"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>

            {/* Label */}
            {isActive && (
              <>
                <span className="text-xs text-white mt-1">{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-white rounded-full" />
              </>
            )}
          </Link>
        )
      })}
    </div>
  )
}
