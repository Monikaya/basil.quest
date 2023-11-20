// This file gets and returns the latest commit hash from the basil.quest git repo

// Generally static for now, is defined in variables to allow for future change
const user = "monikaya";
const repoName = "basil.quest";


const githubUrl = "https://api.github.com/repos/" + user + "/" + repoName + "/commits/master";
// await the json link, then actually assign latestCommit to the json data
const latestCommit = await fetch(githubUrl)
    .then((response) => response.json());

// Export the version, .substring being used to get only the first 5 characters of the hash
export let version = latestCommit.sha.substring(0,5);