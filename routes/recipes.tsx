import { Handlers, PageProps } from "$fresh/server.ts";

import { PageWrapper } from "../components/PageWrapper.tsx";
import { db } from "../data/supabaseClient.ts";
import { Recipe, RecipeSummary } from "../types/recipes.ts";

export const handler: Handlers<RecipeSummary[] | null> = {
  async GET(_, ctx) {
    const allRecipes = await db.tables().get("recipes").items().all();

    return ctx.render(allRecipes.map(({ id, name, imageUrl }: Recipe) => ({
      id,
      name,
      imageUrl,
    })));
  },
};

const RecipesPage = ({ data }: PageProps<RecipeSummary[] | null>) => {
  if (!data) {
    return null;
  }

  return (
    <PageWrapper>
      <div
        class="flex flex-col items-start content-start gap-2 mb-8"
      >
        <h1 class="text-2xl text-gray-800">Recipes</h1>
        <a href="/recipes/create">
          <button
            class="px-4 py-1 bg-yellow-300 text-gray-800 text-lg rounded-full font-semibold hover:(bg-black text-yellow-300)"
          >
            Add Recipe +
          </button>
        </a>
      </div>
      <div
        class="flex flex-row items-center justify-evenly flex-wrap gap-4"
      >
        {data.map(({ id, name, imageUrl }) => (
          <div
            class="p-2 border(2 gray-800) rounded-md w-max shadow-lg hover:(bg-yellow-300)"
          >
            <a
              key={id}
              class="flex flex-col justify-around items-center"
              href={`/recipes/${id}`}
            >
              <div class="w-36">
                <img
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  class="w-full h-full rounded-md"
                />
              </div>
              <p class="text(xl) font-bold">{name}</p>
            </a>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default RecipesPage;
