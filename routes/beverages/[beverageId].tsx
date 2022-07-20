/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getBeverageDescriptionById } from "../../data/beverages.ts";
import { BeverageDetails } from "../../types/Beverages.ts";

export const handler: Handlers<BeverageDetails | null> = {
  async GET(_, ctx) {
    try {
      const beverage = await getBeverageDescriptionById(ctx.params.beverageId);
      return ctx.render(beverage);
    } catch (error) {
      throw error;
    }
  },
};

const BeveragePage = ({ data }: PageProps<BeverageDetails | null>) => {
  if (!data) {
    return null;
  }

  const { name, description, imageUrl } = data;

  return (
    <main
      class={tw
        `flex flex-row justify-center items-center gap-2 p-4 mx-auto max-w-screen-md`}
    >
      <div class={tw`w-64`}>
        <img
          class={tw`w-full h-full`}
          src={imageUrl}
          alt={`Image of ${name}`}
        />
      </div>
      <div class={tw`flex flex-col justify-start items-start gap-1`}>
        <h1 class={tw`text-2xl font-extrabold`}>
          {name}
        </h1>
        <p class={tw`text-xl my-2 font-semibold text-gray-600`}>
          {description}
        </p>
        <a href="/beverages" class={tw`text-lg`}>Back to Homepage</a>
      </div>
    </main>
  );
};

export default BeveragePage;
