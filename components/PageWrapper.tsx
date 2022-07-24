/** @jsx h */
import { FunctionComponent, h } from "preact";
import type { ComponentProps } from "preact";
import { tw } from "@twind";

import { Header } from "./Header.tsx";

type PageWrapperProps = Record<string, unknown>;

export const PageWrapper: FunctionComponent<PageWrapperProps> = (
  { children },
) => {
  return (
    <main class={tw`w-screen`}>
      <Header />
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        {children}
      </div>
    </main>
  );
};
