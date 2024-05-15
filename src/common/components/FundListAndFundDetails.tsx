import { Drawer, Stack } from "@mui/material";
import FundList from "../../fundList";
import {
  Link,
  Outlet,
  useMatchRoute,
  useNavigate,
} from "@tanstack/react-router";

export default function FundListAndFundDetails() {
  const navigate = useNavigate();
  const matchRoute = useMatchRoute();
  const open = matchRoute({ to: "/funds/$slug/$id" });
  // const match = route.useMatch();
  const onClose = () => {
    navigate({ to: "/funds", search: (prev) => prev });
  };
  return (
    <>
      <FundList />
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
    </>
  );
}
