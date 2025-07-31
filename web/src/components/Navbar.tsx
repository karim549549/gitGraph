'use client';

import React from 'react';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';
import { GitHubStarsButton } from './animate-ui/buttons/github-stars';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger , DropdownMenuLabel, DropdownMenuSeparator } from './animate-ui/radix/dropdown-menu';
import Link from 'next/link';


const Navbar = () => {
  return (
    <header className="p-4 sticky top-0 z-50">
      <nav className="flex items-center justify-between max-w-5xl mx-auto py-2 px-5 backdrop-blur-2xl bg-transparent border border-white/10 ring-1 ring-white/20 rounded-full">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <GitHubStarsButton username="your-username" repo="your-repo" />
          <ThemeSwitch />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md">
                <Menu />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border-white/10 text-white">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuItem className="focus:bg-white/10">
                <GitHubStarsButton username="your-username" repo="your-repo" />
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10 flex items-center justify-between">
                <span>Theme</span>
                <ThemeSwitch />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Socials</DropdownMenuLabel>
              <DropdownMenuItem asChild className="focus:bg-white/10">
                <Link href="#" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-white/10">
                <Link href="#" className="flex items-center gap-2">
                  <p className="w-4 h-4 font-bold text-center">X</p>
                  <span>Follow on X</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-white/10">
                <Link href="#" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="focus:bg-white/10">
                <Link href="mailto:your-email@example.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
