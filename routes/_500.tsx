import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({error}: ErrorPageProps) {
    return <p class="text(xl red-900)">
        Internal Error: {(error as Error).message}
    </p>
}