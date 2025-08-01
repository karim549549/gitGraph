"use server";

import {
  GitHubRepoDetails,
  GitHubBranchDetails,
  GitHubCommitDetails,
  GitTreeData,
} from "../types/github";

export async function getRepoInfo(repoUrl: string) {
  try {
    const githubUrlRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([\w.-]+)\/([\w.-]+)(?:\.git)?\/?$/;
    const match = repoUrl.match(githubUrlRegex);

    if (!match) {
      return { error: "Please enter a valid GitHub repository URL." };
    }

    const [, owner, repo] = match;

    const headers = {
      Accept: "application/vnd.github.v3+json",
    };
    const repoResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers }
    );
    if (!repoResponse.ok) {
      if (repoResponse.status === 404) {
        return {
          error: `The repository '${owner}/${repo}' could not be found. Please check the URL and try again.`,
        };
      }
      const errorData = await repoResponse.json();
      return {
        error: `An error occurred while fetching the repository data: ${
          errorData.message || repoResponse.statusText
        }`,
      };
    }
    const repoDetails: GitHubRepoDetails = await repoResponse.json();

    // Fetch branches
    const branchesResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/branches?per_page=100`,
      { headers }
    );
    if (!branchesResponse.ok) {
      const errorData = await branchesResponse.json();
      return {
        error: `An error occurred while fetching the branch data: ${
          errorData.message || branchesResponse.statusText
        }`,
      };
    }
    const githubBranches: GitHubBranchDetails[] = await branchesResponse.json();

    const branches = githubBranches.map((branch) => ({
      name: branch.name,
      commitSha: branch.commit.sha,
    }));

    // Fetch commits (initial 3 pages for a good sample)
    const allCommits: GitHubCommitDetails[] = [];
    let page = 1;

    while (true) {
      const commitsResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${page}`,
        { headers }
      );
      if (!commitsResponse.ok) {
        const errorData = await commitsResponse.json();
        // If it's a 409 (Git-related error for empty repo), break gracefully
        if (commitsResponse.status === 409) {
          console.warn(
            `No commits found for ${owner}/${repo} or repository is empty.`
          );
          break;
        }
        return {
          error: `An error occurred while fetching the commit data: ${
            errorData.message || commitsResponse.statusText
          }`,
        };
      }
      const pageCommits: GitHubCommitDetails[] = await commitsResponse.json();
      if (pageCommits.length === 0) {
        break; // No more commits
      }
      allCommits.push(...pageCommits);
      page++;
    }

    const commits = allCommits.map((commit) => ({
      id: commit.sha,
      message: commit.commit.message,
      author: commit.commit.author.name,
      date: commit.commit.author.date,
      parents: commit.parents.map((parent) => parent.sha),
      isMerge: commit.parents.length > 1,
    }));

    const gitTreeData: GitTreeData = {
      repoName: repoDetails.name,
      ownerLogin: repoDetails.owner.login,
      branches,
      commits,
    };

    return { data: gitTreeData };
  } catch (error: unknown) {
    console.error("Error fetching repository info:", error);
    if (error instanceof Error) {
      return {
        error: `An unexpected error occurred while fetching the repository information: ${error.message}`,
      };
    } else {
      return { error: "An unknown error occurred." };
    }
  }
}
