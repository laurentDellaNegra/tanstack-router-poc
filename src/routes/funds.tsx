import { createFileRoute } from "@tanstack/react-router";
import { fundListQueryOptions } from "../fundList/api";

import { z } from "zod";

const apiSearchSchema = z.object({
  page: z.number().optional().catch(200),
  type: z.enum(["albums", "photos", "todos"]).optional().catch("todos"),
  isMenuOpened: z.boolean().optional().catch(false),
});

export type ApiSearch = z.infer<typeof apiSearchSchema>;

export const Route = createFileRoute("/funds")({
  validateSearch: (search) => apiSearchSchema.parse(search),
  loaderDeps: ({ search: { page, type } }) => ({ page, type }),
  loader: ({ context, deps }) =>
    context.queryClient.ensureQueryData(fundListQueryOptions(deps)),
});
