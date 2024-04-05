import { createLazyFileRoute } from "@tanstack/react-router";
import FundDetails from "../fundDetails";

export const Route = createLazyFileRoute("/funds/$id")({
  component: FundDetails,
  // component: FundListAndFundDetails,
});
