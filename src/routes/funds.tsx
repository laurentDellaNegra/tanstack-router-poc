import { createFileRoute } from "@tanstack/react-router";
import FundList from "../fundList";
import { z } from "zod";
import { fundListQueryOptions } from "../fundList/api";
import { commonQueryOptions } from "../common/api";

const apiSearchSchema = z.object({
  page: z.number().optional().catch(200),
  type: z.enum(["albums", "photos", "todos"]).optional().catch("todos"),
  isMenuOpened: z.boolean().optional().catch(false),
});

export const Route = createFileRoute("/funds")({
  validateSearch: (search) => apiSearchSchema.parse(search),
  loaderDeps: ({ search: { page, type } }) => ({ page, type }),
  loader: ({ context, deps }) => {
    context.queryClient.ensureQueryData(fundListQueryOptions(deps));
    context.queryClient.ensureQueryData(commonQueryOptions);
  },
  component: () => <FundList />,
});
