'use client';

import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { Share, Download } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './animate-ui/radix/dropdown-menu';

const PlaygroundControls = () => {
  const handleShare = () => {
    // Logic to copy link to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="absolute top-4 right-4 z-10 flex items-center gap-3 bg-white/5 dark:bg-black/5 backdrop-blur-lg rounded-md p-2 border border-white/10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 rounded-md bg-transparent text-neutral-800 dark:text-white hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200 flex items-center gap-2">
            <Download size={20} />
            <span>Export</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-black/80 backdrop-blur-md border-white/10 text-white">
          <DropdownMenuItem onSelect={() => alert('Exporting as PNG...')} className="focus:bg-white/10">
            Export as PNG
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Exporting as SVG...')} className="focus:bg-white/10">
            Export as SVG
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <button 
        onClick={handleShare}
        className="p-2 rounded-md bg-transparent text-neutral-800 dark:text-white hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-200 flex items-center gap-2"
      >
        <Share size={20} />
        <span>Share</span>
      </button>

      <ThemeSwitch />
    </div>
  );
};

export default PlaygroundControls;
