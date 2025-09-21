import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: API_KEY ? `token ${API_KEY}` : "",
  },
});

/**
 * Advanced Search for GitHub users
 */
export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await githubApi.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data.items; // list of users
}
