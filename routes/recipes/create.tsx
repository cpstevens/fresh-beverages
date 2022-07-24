/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { PageWrapper } from "../../components/PageWrapper.tsx";
import { db } from "../../data/supabaseClient.ts";

export const handler: Handlers<boolean> = {
  async POST(req, ctx) {
    const data = await req.formData();
    const name = data.get("name");
    const description = data.get("description");
    const recipeUrl = data.get("recipeUrl");
    const imageUrl = data.get("imageUrl");

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
      <h1 class={tw`text(2xl gray-800) my-3`}>
        Create Recipe
      </h1>
      <form
        class={tw`flex flex-col items-start content-start gap-4`}
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
          class={tw
            `w-full p-2 bg-yellow-300 text-gray-800 text-xl font-bold hover:(bg-black text-yellow-300)`}
          type="submit"
        >
          Create
        </button>
      </form>
    </PageWrapper>
  );
};

export default CreateRecipePage;
