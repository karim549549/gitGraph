import React from 'react';
import { cn } from '@/lib/utils';

const GitHubButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "ml-4 px-4 py-2 rounded-md font-semibold",
        "bg-white text-black dark:bg-black dark:text-white", // Default and dark mode styles
        "hover:opacity-90 transition-opacity duration-200",
        className
      )}
      {...props}
    >
      Connect with GitHub
    </button>
  );
};

export default GitHubButton;
