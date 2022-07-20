/** @jsx h */
/** @type { import('twind').Configuration} */

import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BeverageSummary } from "../types/Beverages.ts";
import { getAllBeverageSummaries } from "../data/beverages.ts";

export const handler: Handlers<BeverageSummary[] | null> = {
  async GET(_, ctx) {
    const beverageValues = await getAllBeverageSummaries();

    return ctx.render(beverageValues);
  },
};

const BeveragesRoute = ({ data }: PageProps<BeverageSummary[] | null>) => {
  if (!data) {
    return <h1>No Beverages found :/</h1>;
  }

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-2xl`}>
        Beverages
      </h1>
      <h2 class={tw`text-xl`}>Click on a beverage to see its details</h2>
      <nav class={tw`my-3`}>
        {data.map(({ id, name }) => (
          <a
            href={`/beverages/${id}`}
            class={tw
              ` w-full p-2 bg-blue-700 text-white hover:text-gray-800 hover:bg-gray-100 font-semibold visited:text-gray-200 `}
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default BeveragesRoute;
