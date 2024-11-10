import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface Props {
  version?: string;
}

export default async function Counter() {
  const user = "monikaya";
  const repoName = "basil.quest";
  let version = "loading...";

  const githubUrl = "https://api.github.com/repos/" + user + "/" + repoName + "/commits/master";
  // await the json link, then actually assign latestCommit to the json data

  const latestCommit = await fetch(githubUrl)
    .then((response) => response.json());
  // Export the version, .substring being used to get only the first 5 characters of the hash

  try {
    version = await latestCommit.sha.substring(0,5);
    console.log(version);
  }
  catch(err) {
    console.log(err);
      return "error";
  }

  return (
    <div class="flex gap-8 py-6">
      <p>{version.toString()}</p>
    </div>
  );
}