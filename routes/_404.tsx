import { UnknownPageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <p class="text-xl text-red-900">
      Sorry, no page exists for {url.pathname}
    </p>
  );
}
