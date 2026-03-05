// GitHub API utility to fetch user data and repositories
// This file handles all GitHub API calls for the portfolio

const GITHUB_USERNAME = "SRGmau2030"
const GITHUB_API_BASE = "https://api.github.com"

// Interface for GitHub repository data
interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
}

// Interface for GitHub user data
interface GitHubUser {
  login: string
  name: string | null
  bio: string | null
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

/**
 * Fetch GitHub user profile information
 * @returns GitHub user data or null if fetch fails
 */
export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error("[v0] Failed to fetch GitHub user:", response.status)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("[v0] Error fetching GitHub user:", error)
    return null
  }
}

// List of specific repositories to showcase in the portfolio
const FEATURED_REPOS = [
  "mi-resume-aws",
  "kaxanly",
  "fitclub-412",
  "dag-store",
  "dcvs-landing",
  "salon-laubet",
]

/**
 * Fetch specific featured GitHub repositories
 * @returns Array of GitHub repositories or empty array if fetch fails
 */
export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const repoPromises = FEATURED_REPOS.map(async (repoName) => {
      const response = await fetch(
        `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        },
      )

      if (!response.ok) {
        console.error(`[v0] Failed to fetch repo ${repoName}:`, response.status)
        return null
      }

      return await response.json()
    })

    const results = await Promise.all(repoPromises)
    return results.filter((repo): repo is GitHubRepo => repo !== null)
  } catch (error) {
    console.error("[v0] Error fetching GitHub repos:", error)
    return []
  }
}
