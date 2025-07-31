export const metadata = {
  title: 'Home',
};

import DarkVeil from '../components/ui/DarkVeil';


import SocialBar from '../components/SocialBar';

import { Link as LinkIcon, GitGraph, Eye } from 'lucide-react';

import HowItWorksCard from '../components/HowItWorksCard';

import { InputButton, InputButtonProvider, InputButtonAction, InputButtonSubmit, InputButtonInput } from '../components/animate-ui/buttons/input';

import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <main>
      <SocialBar />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <DarkVeil />
      </div>
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-4">
          The easiest way to map your git repositories.
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 font-serif">
          Visualize Your Git History
        </h1>
        <p className="max-w-2xl text-sm sm:text-md md:text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          GitGraph transforms complex Git repositories into beautiful, interactive graphs. Understand branch structures, commit history, and the flow of your projects at a glance. Perfect for developers, teams, and students.
        </p>
        <InputButtonProvider className="h-12 md:h-16 w-full max-w-sm md:max-w-xl">
          <InputButton>
            <InputButtonInput placeholder="Enter a repository URL" className="text-sm sm:text-base" />
            <InputButtonAction className="text-sm sm:text-base">Enter a repository URL</InputButtonAction>
            <InputButtonSubmit className="text-sm sm:text-base">Visualize</InputButtonSubmit>
          </InputButton>
        </InputButtonProvider>
        <div className="w-full max-w-6xl mt-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <HowItWorksCard
              icon={<LinkIcon className="h-8 w-8 text-violet-400" />}
              title="1. Paste URL"
              description="Simply paste the full URL of any public repository from GitHub, GitLab, or Bitbucket into the input field above. No authentication is required."
              index={0}
            />
            <HowItWorksCard
              icon={<GitGraph className="h-8 w-8 text-pink-400" />}
              title="2. Visualize"
              description="Our tool instantly fetches the repository data and renders a beautiful, interactive graph of the commit history and branch structure. It's all done in your browser."
              index={1}
            />
            <HowItWorksCard
              icon={<Eye className="h-8 w-8 text-blue-400" />}
              title="3. Explore"
              description="Pan, zoom, and click on commits to explore the repository's history. Understand complex branching strategies and see how your project has evolved over time."
              index={2}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;