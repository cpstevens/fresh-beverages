export type Beverage = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export type BeverageSummary = Pick<Beverage, "id" | "name">;
export type BeverageDetails = Pick<
  Beverage,
  "name" | "description" | "imageUrl"
>;
