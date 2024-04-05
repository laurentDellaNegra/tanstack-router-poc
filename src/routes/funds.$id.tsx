import { createFileRoute } from "@tanstack/react-router";
import { fundDetailsQueryOptions } from "../fundDetails/api";
import { z } from "zod";

export const Route = createFileRoute("/funds/$id")({
  parseParams: (params) => ({
    id: z.number().int().parse(Number(params.id)),
  }),
  stringifyParams: ({ id }) => ({ id: `${id}` }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(fundDetailsQueryOptions(params.id)),
});
