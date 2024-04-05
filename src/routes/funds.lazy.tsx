import { createLazyFileRoute } from "@tanstack/react-router";
import FundListAndFundDetails from "../common/components/FundListAndFundDetails";

export const Route = createLazyFileRoute("/funds")({
  component: FundListAndFundDetails,
});
