import { createLazyFileRoute } from "@tanstack/react-router";
import FundDetails from "../fundDetails";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/funds/$slug/$id")({
  component: () => (
    <Suspense fallback={<>Loading component fund details...</>}>
      <FundDetails />
    </Suspense>
  ),
  // pendingComponent: () => <>Loading fund details...</>,
});
