import { Drawer, Stack } from "@mui/material";
import FundList from "../../fundList";
import { Link, MatchRoute, Outlet, getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/funds");

export default function FundListAndFundDetails() {
  const navigate = route.useNavigate();
  const onClose = () => {
    navigate({ to: "/funds", search: (prev) => prev });
  };
  return (
    <>
      <FundList />
      <MatchRoute to="/funds/$slug/$id">
        {(open) => {
          return (
            <Drawer anchor="right" open={!!open} onClose={onClose}>
              <Stack flex={1} p={4} maxWidth="500px" gap={4} width="100vw">
                <Stack direction="row" justifyContent="flex-end">
                  <Link to={"/funds"}>Close</Link>
                </Stack>
                <Stack>
                  <Outlet />
                </Stack>
              </Stack>
            </Drawer>
          );
        }}
      </MatchRoute>
    </>
  );
}
