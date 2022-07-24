export type Recipe = {
  id: number;
  name: string;
  description: string;
  recipeUrl: string;
  imageUrl: string;
};

export type RecipeSummary = Pick<Recipe, "id" | "name" | "imageUrl">;
