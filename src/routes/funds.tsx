import { createFileRoute } from "@tanstack/react-router";
import { fundListQueryOptions } from "../fundList/api";

export const Route = createFileRoute("/funds")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(fundListQueryOptions),
});
