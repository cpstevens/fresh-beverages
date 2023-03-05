import { Handlers, PageProps } from "$fresh/server.ts";

import { BeverageSummary } from "../types/beverages.ts";
import { getAllBeverageSummaries } from "../data/beverages.ts";
import { PageWrapper } from "../components/PageWrapper.tsx";
import BeverageCarousel from "../islands/BeverageCarousel.tsx";

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
    <PageWrapper>
      <h1 class="text-2xl">
        Beverages
      </h1>
      <h2 class="text-xl">Click on a beverage to see its details</h2>
      <BeverageCarousel beverages={data} />
    </PageWrapper>
  );
};

export default BeveragesRoute;
