import Counter from "../islands/Counter.tsx";
import { PageWrapper } from "../components/PageWrapper.tsx";

export default function Home() {
  return (
    <PageWrapper>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class="text-2xl font-bold">Fresh Beverages</h1>
      <p class="my-6">
        This site is made with `fresh` and contains some of the freshest
        beverages you'll find on the market!
      </p>
      <div
        class="my-6"
      >
        Want to see some "fresh" beverages? Click{" "}
        <a
          class="text-gray-700 hover:(text-blue-500) visited:(text-purple-700)"
          href="/beverages"
        >
          here
        </a>{" "}
        to get started
      </div>
      <h2 class="text(xl) my-2">
        Islands Example. Coming Soon to Beverages!
      </h2>
      <Counter start={3} />
    </PageWrapper>
  );
}
