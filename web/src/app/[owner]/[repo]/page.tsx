import { getRepoInfo } from '../../actions';
import PlaygroundControls from '../../../components/PlaygroundControls';
import AIChat from '../../../components/AIChat';
import GitGraphViewer from '../../../components/GitGraphViewer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function RepoPage(props: any) {
  const { owner, repo } = props.params;
  const repoUrl = `https://github.com/${owner}/${repo}`;
  const result = await getRepoInfo(repoUrl);

  if (result.error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error: {result.error}
      </div>
    );
  }

  if (!result.data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading repository data...
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <Link href="/"
        className="absolute top-4 left-4 p-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition-colors duration-200 z-10 flex items-center justify-center"
        aria-label="Go back to home"
      >
        <ArrowLeft size={24} />
        <span className="ml-2">Back</span>
      </Link>
      <PlaygroundControls />
      <GitGraphViewer initialData={result.data} />
      <AIChat />
    </div>
  );
}
