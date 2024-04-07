import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { User } from "../common/user";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { commonQueryOptions } from "../common/api";

export const Route = createRootRouteWithContext<{
  user: User;
  queryClient: QueryClient;
}>()({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(commonQueryOptions),
  component: () => (
    <>
      <>Common Header</>
      <hr />
      <Outlet />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
});
