/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class={tw`text-2xl font-bold`}>Fresh Beverages</h1>
      <p class={tw`my-6`}>
        This site is made with `fresh` and contains some of the freshest
        beverages you'll find on the market!
      </p>
      <div
        class={tw`my-6`}
      >
        Want to see some "fresh" beverages? Click{" "}
        <a
          class={tw
            `text-gray-700 hover:(text-blue-500) visited:(text-purple-700)`}
          href="/beverages"
        >
          here
        </a>{" "}
        to get started
      </div>
      <h2 class={tw`text(xl) my-2`}>
        Islands Example. Coming Soon to Beverages!
      </h2>
      <Counter start={3} />
    </div>
  );
}
