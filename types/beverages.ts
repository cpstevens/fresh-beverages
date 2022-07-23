export type Beverage = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
};

export type BeverageSummary = Pick<
  Beverage,
  "id" | "name" | "shortDescription" | "imageUrl"
>;
export type BeverageDetails = Pick<
  Beverage,
  "name" | "description" | "imageUrl"
>;
