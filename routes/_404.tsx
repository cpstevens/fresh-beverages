/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <p class={tw`text-xl text-red-900`}>
      Sorry, no page exists for {url.pathname}
    </p>
  );
}
