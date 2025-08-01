import React from 'react';
import { cn } from '@/lib/utils';
import { FaGithub } from 'react-icons/fa';

const ConnectGitHubButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "ml-4 px-4 py-2 rounded-md font-semibold flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer",
        "bg-black text-white dark:bg-white dark:text-black", // Dark mode: bg-white, text-black; Light mode: bg-black, text-white
        "hover:opacity-80 transition-opacity duration-200",
        className
      )}
      {...props}
    >
      <span className="h-5 w-5 flex items-center justify-center">
        <FaGithub />
      </span>
      <span>Connect to GitHub</span>
    </button>
  );
};

export default ConnectGitHubButton;
