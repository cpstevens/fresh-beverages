/** @jsx h */
import { FunctionComponent } from "preact";
import type { ComponentProps } from "preact";
import { Header } from "./Header.tsx";

type PageWrapperProps = Record<string, unknown>;

export const PageWrapper: FunctionComponent<PageWrapperProps> = (
  { children },
) => {
  return (
    <main class="w-screen">
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">
        {children}
      </div>
    </main>
  );
};
