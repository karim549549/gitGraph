'use client';

import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ZigzagLine from './ui/ZigzagLine';

import { Github } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="hidden md:flex fixed left-4 top-0 h-full z-50 items-center">
      <div className="flex flex-col items-center gap-4 h-full py-4">
        <ZigzagLine className="flex-grow text-neutral-100 dark:text-neutral-800" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" className="p-2 rounded-md bg-neutral-800 hover:brightness-125 transition-all duration-200">
                <Github className="w-5 h-5 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>View on GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" className="p-2 rounded-md bg-black hover:brightness-125 transition-all duration-200">
                <p className="w-5 h-5 font-bold text-white flex items-center justify-center">X</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Follow on X</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#" className="p-2 rounded-md bg-blue-600 hover:brightness-125 transition-all duration-200">
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Connect on LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="mailto:your-email@example.com" className="p-2 rounded-md bg-red-600 hover:brightness-125 transition-all duration-200">
                <Mail className="w-5 h-5 text-white" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Contact via Email</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ZigzagLine className="flex-grow text-neutral-100 dark:text-neutral-800" />
      </div>
    </div>
  );
};

export default SocialBar;
