import { Handlers, PageProps } from "$fresh/server.ts";

import { PageWrapper } from "../../components/PageWrapper.tsx";
import { db } from "../../data/supabaseClient.ts";
import { Recipe } from "../../types/recipes.ts";

export const handler: Handlers<Recipe | null> = {
  async GET(_, ctx) {
    try {
      const recipeId = parseInt(ctx.params.recipeId, 10);
      const recipe = await db.tables().get("recipes").items().get(
        "id",
        recipeId,
      );

      return ctx.render(recipe[0]);
    } catch (error) {
      throw error;
    }
  },
};

const BeveragePage = ({ data }: PageProps<Recipe | null>) => {
  if (!data) {
    return null;
  }

  const { name, description, imageUrl, recipeUrl } = data;

  return (
    <PageWrapper>
      <div
        class="flex flex-row justify-center items-center gap-8 p-4"
      >
        <div class="h-64">
          <img
            class="w-full h-full"
            src={imageUrl}
            alt={`Image of ${name}`}
          />
        </div>
        <div class="flex flex-col justify-start items-start gap-1">
          <h1 class="text-2xl font-bold">
            {name}
          </h1>
          <p class="text-xl my-2 font-semibold text-gray-600">
            {description}
          </p>
          <a href={recipeUrl} target="_blank" class="text-lg">
            Full Recipe
          </a>
          <a href="/recipes" class="text-lg">Back to Recipes Page</a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BeveragePage;
