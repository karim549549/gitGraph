'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputButton, InputButtonProvider, InputButtonAction, InputButtonSubmit, InputButtonInput } from './animate-ui/buttons/input';
import { getRepoInfo } from '../app/actions';

const RepoInputSection = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleVisualize = async () => {
    setIsLoading(true);
    setError(null);

    const result = await getRepoInfo(repoUrl);

    setIsLoading(false);

    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      router.push(`/${result.data.ownerLogin}/${result.data.repoName}`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <div className='min-h-5'>
        {error && <p className="w-fit py-2 px-5  mb-3 mt-2 text-center dark:text-yellow-200 bg-red-500/15 dark:bg-yellow-500/15 border border-red-300 text-red-400 dark:border-yellow-800 rounded-md">{error}</p>}
      </div>
      <InputButtonProvider className="h-12 mt-2 md:h-16 w-full md:min-w-2xl">
        <InputButton>
          <InputButtonInput
            placeholder="Enter a repository URL"
            className="text-sm sm:text-base"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            disabled={isLoading}
          />
          <InputButtonAction className="text-sm sm:text-base">Enter a repository URL</InputButtonAction>
          <InputButtonSubmit className="text-sm sm:text-base" onClick={handleVisualize} disabled={isLoading}>
            {isLoading ? 'Validating...' : 'Visualize'}
          </InputButtonSubmit>
        </InputButton>
      </InputButtonProvider>
    </div>
  );
};

export default RepoInputSection;
