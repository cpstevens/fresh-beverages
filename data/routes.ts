import { Route } from "../types/routing.ts";

export const appRoutes: Route[] = [
  {
    href: "/beverages",
    displayName: "Beverages",
    shouldDisplayInHeader: true,
  },
  {
    href: "/recipes",
    displayName: "Recipes",
    shouldDisplayInHeader: true,
  },
];
