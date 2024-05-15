import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { buildUser } from "./common/user";

export const queryClient = new QueryClient();

console.log("location.pathname", location.pathname);

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    // TODO: Get this from AEM context
    user: buildUser("fr"),
    queryClient,
  },
  basepath: location.pathname.replace(/\/funds\/?/, ""),
  defaultPendingComponent: () => <>Default loading...</>,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  defaultPendingMinMs: 0,
  defaultPendingMs: 0,
  trailingSlash: "preserve",
  defaultNotFoundComponent: () => <>Not found</>,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
