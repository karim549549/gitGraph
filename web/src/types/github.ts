export interface GitHubCommitParent {
  sha: string;
}

export interface GitHubCommitDetails {
  sha: string;
  commit: {
    author: { name: string; date: string };
    message: string;
  };
  parents: GitHubCommitParent[];
}

export interface GitHubBranchDetails {
  name: string;
  commit: { sha: string };
}

export interface GitHubRepoDetails {
  name: string;
  owner: { login: string };
}

export interface GitTreeData {
  repoName: string;
  ownerLogin: string;
  branches: { name: string; commitSha: string }[];
  commits: {
    id: string;
    message: string;
    author: string;
    date: string;
    parents: string[];
    isMerge: boolean;
  }[];
}
