import { Handlers, PageProps } from "$fresh/server.ts";
import { getBeverageDescriptionById } from "../../data/beverages.ts";
import { BeverageDetails } from "../../types/beverages.ts";
import { PageWrapper } from "../../components/PageWrapper.tsx";

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
    <PageWrapper>
      <div
        class="flex flex-row justify-center items-center gap-2 p-4"
      >
        <div class="h-64">
          <img
            class="w-full h-full"
            src={imageUrl}
            alt={`Image of ${name}`}
          />
        </div>
        <div class="flex flex-col justify-start items-start gap-1">
          <h1 class="text-2xl font-extrabold">
            {name}
          </h1>
          <p class="text-xl my-2 font-semibold text-gray-600">
            {description}
          </p>
          <a href="/beverages" class="text-lg">Back to Homepage</a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BeveragePage;
