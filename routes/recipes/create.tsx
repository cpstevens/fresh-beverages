import { tw } from "twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { PageWrapper } from "../../components/PageWrapper.tsx";
import { db } from "../../data/supabaseClient.ts";

const supportedImageTypes = new Set<string>([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/jpg",
  "image/webp",
]);

export const handler: Handlers<boolean> = {
  async POST(req, ctx) {
    const data = await req.formData();
    const name = data.get("name");
    const description = data.get("description");
    const recipeUrl = data.get("recipeUrl");
    const imageUrl = data.get("imageUrl");

    // @todo parallelize these
    const imageValidation = await fetch(new URL(imageUrl!.toString()));
    const recipeValidation = await fetch(new URL(recipeUrl!.toString()));

    if (recipeValidation.status !== 200) {
      return new Response("Recipe URL invalid", { status: 400 });
    }

    if (imageValidation.status !== 200) {
      return new Response("Image URL invalid", { status: 400 });
    }

    if (
      !supportedImageTypes.has(
        imageValidation.headers.get("content-type") ?? "",
      )
    ) {
      return new Response("Image URL did not report proper image type", {
        status: 400,
      });
    }

    // @TODO Add Validation
    const insertData = {
      name,
      description,
      recipeUrl,
      imageUrl,
    };

    await db.tables().get("recipes").items().add(insertData);

    const { protocol, host } = new URL(req.url);
    const redirectUrl = `${protocol}//${host}/recipes`;
    return Response.redirect(redirectUrl);
  },
};

const CreateRecipePage = ({}: PageProps) => {
  const labelClass = tw`flex flex-row content-start items-center gap-2`;
  const inputClass = tw`border(1 gray-800)`;
  return (
    <PageWrapper>
      <h1 class="text(2xl gray-800) my-3">
        Create Recipe
      </h1>
      <form
        class="flex flex-col items-start content-start gap-4"
        method="POST"
      >
        <label class={labelClass}>
          Recipe Name
          <input required class={inputClass} type="text" name="name" />
        </label>
        <label class={labelClass}>
          Recipe Description
          <input
            required
            class={inputClass}
            type="textarea"
            name="description"
          />
        </label>

        <label class={labelClass}>
          Recipe URL
          <input required class={inputClass} type="url" name="recipeUrl" />
        </label>

        <label class={labelClass}>
          Image URL
          <input required class={inputClass} type="url" name="imageUrl" />
        </label>
        <button
          class="w-full p-2 bg-yellow-300 text-gray-800 text-xl font-bold hover:(bg-black text-yellow-300)"
          type="submit"
        >
          Create
        </button>
      </form>
    </PageWrapper>
  );
};

export default CreateRecipePage;
