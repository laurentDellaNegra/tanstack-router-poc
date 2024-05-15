import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { User } from "../common/user";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRouteWithContext<{
  user: User;
  queryClient: QueryClient;
}>()({
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
