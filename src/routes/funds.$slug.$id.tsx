import { createFileRoute } from "@tanstack/react-router";
import { fundDetailsQueryOptions } from "../fundDetails/api";
import { z } from "zod";

export const Route = createFileRoute("/funds/$slug/$id")({
  parseParams: (params) => ({
    id: z.number().int().parse(Number(params.id)),
    slug: z.string().parse(params.slug),
  }),
  stringifyParams: ({ id, slug }) => ({ id: `${id}`, slug: `${slug}` }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(fundDetailsQueryOptions(params.id)),
});
