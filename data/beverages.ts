import {
  Beverage,
  BeverageDetails,
  BeverageSummary,
} from "../types/Beverages.ts";

const beverages: Record<string, Beverage> = {
  coke: {
    name: "Coca-Cola",
    id: "coke",
    shortDescription: "The pride of Atlanta",
    description:
      "The classic, minus that one special ingredient they don't let you use anymore",
    imageUrl:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
  },
  dew: {
    name: "Mountain Dew",
    id: "dew",
    shortDescription: "Fueling Kyles since 64",
    description: "Think you have what it takes to climb the mountain?",
    imageUrl:
      "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/122250/122250_p/122250",
  },
  mst: {
    name: "Sierra Mist",
    id: "mst",
    shortDescription: "Pepsi made us add it",
    description:
      "When you aren't allowed to have sprite because of a contract with Pepsi",
    imageUrl:
      "https://www.sierramist.com/images/parallax-scrolling/sierramist-parallax-mobile-product.png",
  },
  drpep: {
    name: "Dr. Pepper",
    id: "drpep",
    shortDescription: "When you get some Coke in your Root Beer",
    description: "The absolute goat, no debate",
    imageUrl:
      "https://dam.keurig.com/content/dam/cold-beverage-brands/brands/dr_pepper/product_images/dpregular/cans/12oz/png/DP_Regular_12oz_Can_Wet.png",
  },
};

export const getAllBeverageSummaries = (): Promise<BeverageSummary[]> => {
  return new Promise((resolve) =>
    resolve(
      Object.values(beverages).map((
        { name, id, imageUrl, shortDescription },
      ) => ({
        name,
        id,
        imageUrl,
        shortDescription,
      })) as BeverageSummary[],
    )
  );
};

export const getBeverageDescriptionById = (
  beverageId: string,
): Promise<BeverageDetails> => {
  return new Promise((resolve, reject) => {
    const beverage = beverages[beverageId];

    if (!beverage) {
      reject(`No beverage found with id ${beverageId}`);
    }

    resolve({
      ...beverage,
    });
  });
};
