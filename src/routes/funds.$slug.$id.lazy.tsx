import { createLazyFileRoute } from "@tanstack/react-router";
import FundDetails from "../fundDetails";

export const Route = createLazyFileRoute("/funds/$slug/$id")({
  component: () => <FundDetails />,
  // pendingComponent: () => <>Loading fund details...</>,
});
