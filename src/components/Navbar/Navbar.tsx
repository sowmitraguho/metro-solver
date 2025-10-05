'use client';
import { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ShoppingCart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import logo from "@/public/assets/LottieFiles/Logo.json";
import Lottie from "react-lottie-player";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    {
      name: "Services",
      dropdown: [
        { label: "Web Development", href: "/services/web" },
        { label: "App Development", href: "/services/app" }
      ]
    },
    { name: "White label", href: "/white-label" },
    { name: "Contact us", href: "/contact" }
  ];

  return (
    <>
      <nav className="hidden md:flex w-full px-6 py-4 justify-between items-center bg-gradient-to-r from-[#0B051B] to-[#110A2A]">
        {/* Left - Lottie Logo */}
        <div className="w-16 h-12">
          <Lottie animationData={logo} play={true} loop={true} />
        </div>

        {/* Center - Nav Menu Capsule */}
        <div className="hidden md:flex items-center gap-4 bg-[#FFFFFF0A] backdrop-blur-md rounded-full px-4 py-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <div className={`relative rounded-full transition-all
                  ${active === link.name ? "bg-gradient-to-r from-[#c16efd] to-white p-[2px]" : "hover:bg-gradient-to-r hover:from-[#c16efd] hover:to-white p-[2px]"}`}
                    onClick={() => setActive(link.name)}
                  >
                    <p className="bg-[#1A132F] rounded-full px-6 py-2 text-white flex items-center gap-1">
                      {link.name} <ChevronDown size={16} />
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="bg-[#1A132F] text-white rounded-xl"
                >
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div
                key={link.name}
                className={`relative rounded-full transition-all
                ${active === link.name ? "bg-gradient-to-r from-[#c16efd] to-white p-[2px]" : "hover:bg-gradient-to-r hover:from-[#c16efd] hover:to-white p-[2px]"}`}
                onClick={() => setActive(link.name)}
              >
                <Link href={link.href}>
                  <p className="bg-[#1A132F] rounded-full px-6 py-2 text-white">
                    {link.name}
                  </p>
                </Link>
              </div>
            )
          )}
        </div>

        {/* Right - Cart + Profile */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button className="bg-[#FFFFFF0A] hover:bg-[#C16EFD20] p-3 rounded-full relative">
            <ShoppingCart className="text-white" size={20} />
            <span className="absolute -top-1 -right-1 bg-[#C16EFD] text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer border-2 border-[#C16EFD]">
                <AvatarImage src="/user.jpg" alt="user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#1A132F] text-white p-4 rounded-2xl w-64"
            >
              <div className="flex flex-col items-center mb-3">
                <Avatar className="w-16 h-16 border-2 border-[#C16EFD] mb-2">
                  <AvatarImage src="/user.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <p className="font-semibold">Jewel Hossain</p>
                <p className="text-xs text-gray-400">jewel@email.com</p>
              </div>
              <div className="flex gap-2 mb-3">
                <button className="w-1/2 bg-[#C16EFD] text-white py-2 rounded-full text-sm">
                  Website
                </button>
                <button className="w-1/2 bg-[#FFFFFF0A] text-white py-2 rounded-full text-sm">
                  Dashboard
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/profile"
                  className="flex justify-between px-3 py-2 bg-[#FFFFFF0A] rounded-full hover:bg-[#C16EFD20]"
                >
                  <span>Profile</span>
                </Link>
                <Link
                  href="/referrals"
                  className="flex justify-between px-3 py-2 bg-[#FFFFFF0A] rounded-full hover:bg-[#C16EFD20]"
                >
                  <span>Referrals</span>
                </Link>
                <Link
                  href="/rewards"
                  className="flex justify-between px-3 py-2 bg-[#FFFFFF0A] rounded-full hover:bg-[#C16EFD20]"
                >
                  <span>Rewards</span>
                  <span className="bg-[#C16EFD] text-xs px-2 py-0.5 rounded-full">
                    438 pts
                  </span>
                </Link>
                <button className="flex justify-between px-3 py-2 bg-[#FFFFFF0A] rounded-full hover:bg-[#C16EFD20]">
                  Logout
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
};

export default Navbar;
