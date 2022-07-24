/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { appRoutes } from "../data/routes.ts";

export const Header = () => {
  const linkClass = tw
    `text(xl black) font(bold) hover:(border-b-2 border-gray-800)`;

  return (
    <div
      class={tw
        `w-full p-4 bg-yellow-300 flex flex-row justify-start items-center gap-8 shadow-lg`}
    >
      <a href="/" class={tw`h-20`}>
        <img
          src="/logo.svg"
          alt="Fresh Beverages Logo"
          class={tw`w-full h-full`}
        />
      </a>
      <div class={tw`flex flex-row justify-start items-center gap-4`}>
        {appRoutes.map(({ href, displayName, shouldDisplayInHeader }) => {
          if (!shouldDisplayInHeader) {
            return null;
          }

          return <a href={href} class={linkClass}>{displayName}</a>;
        })}
      </div>
    </div>
  );
};
