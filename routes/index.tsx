import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  //const count = useSignal(3);
  //const version = getVersion();
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold]">basil.quest</h1>
        <div>
          <p>Version: not implemented :)</p>
        </div>
      </div>
    </div>
  );
}
