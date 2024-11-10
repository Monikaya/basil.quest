import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

async function getVersion() {
  const user = "monikaya";
  const repoName = "basil.quest";

  const githubUrl = "https://api.github.com/repos/" + user + "/" + repoName + "/commits/master";
  // await the json link, then actually assign latestCommit to the json data

  const latestCommit = await fetch(githubUrl)
    .then((response) => response.json());
  // Export the version, .substring being used to get only the first 5 characters of the hash

  try {
    const version = await latestCommit.sha.substring(0,5);
    return version;
  }
  catch(err) {
    console.log(err);
      return "error";
  }
}

export default async function Home() {
  //const count = useSignal(3);
  const version = await getVersion();
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold]">basil.quest</h1>
        <div>
          <p>Version: {version}</p>
        </div>
      </div>
    </div>
  );
}
