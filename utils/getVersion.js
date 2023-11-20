// This file gets and returns the latest commit hash from the basil.quest git repo

async function getDataFromGit(githubUrl) {
    const latestCommit = await fetch(githubUrl)
        .then((response) => response.json());
    return latestCommit;
}

export default async function getVersion() {
    // Generally static for now, is defined in variables to allow for future change
    const user = "monikaya";
    const repoName = "basil.quest";

    const githubUrl = "https://api.github.com/repos/" + user + "/" + repoName + "/commits/master";
    // await the json link, then actually assign latestCommit to the json data
    const latestCommit = await getDataFromGit(githubUrl);
    // Export the version, .substring being used to get only the first 5 characters of the hash
    try {
        const version = latestCommit.sha.substring(0,5);
        return version;
    }
    catch(err) {
        return "error";
    }
}
