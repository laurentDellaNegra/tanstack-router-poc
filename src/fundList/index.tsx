import { useSuspenseQuery } from "@tanstack/react-query";
import { fundListQueryOptions } from "./api";
import {
  Link,
  Outlet,
  getRouteApi,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import { Box, Button, Collapse, Drawer, Stack } from "@mui/material";

const route = getRouteApi("/funds");

export default function FundList() {
  const searchParams = route.useSearch();
  const navigate = route.useNavigate();
  const router = useRouter();
  const { data } = useSuspenseQuery(fundListQueryOptions(searchParams));
  const params = useParams({ strict: false });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const open = !!(params as any)?.id;
  const onClose = () => {
    navigate({ to: "/funds", search: (prev) => prev });
  };
  return (
    <>
      <h1>Fund List: </h1>
      <Button
        onClick={() => {
          navigate({
            to: "/funds",
            search: (prev) => ({
              ...prev,
              isMenuOpened: !searchParams.isMenuOpened,
            }),
          });
        }}
      >
        Toggle menu
      </Button>
      <Collapse in={!!searchParams.isMenuOpened}>
        <ul>
          <li>
            <Link to={"/funds"} search={(prev) => ({ ...prev, page: 10 })}>
              10
            </Link>
          </li>
          <li>
            <Link to={"/funds"} search={(prev) => ({ ...prev, page: 100 })}>
              100
            </Link>
          </li>
          <li>
            <Link to={"/funds"} search={(prev) => ({ ...prev, page: 200 })}>
              200
            </Link>
          </li>
          <li>
            <Link
              to={"/funds"}
              search={(prev) => ({ ...prev, type: "albums" })}
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to={"/funds"}
              search={(prev) => ({ ...prev, type: "photos" })}
            >
              Photos
            </Link>
          </li>
          <li>
            <Link to={"/funds"} search={(prev) => ({ ...prev, type: "todos" })}>
              Todos
            </Link>
          </li>
        </ul>
      </Collapse>
      <Stack direction="row">
        <Box>
          <h2>Links</h2>
          <ul>
            {data.map((d) => (
              <li key={d.id}>
                <Link
                  from={"/funds"}
                  to={"/funds/$slug/$id"}
                  params={{ id: d.id, slug: d.title.split(" ")[0] }}
                  search
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <h2>Buttons + preload</h2>
          <ul>
            {data.map((d) => (
              <li key={d.id}>
                <Button
                  onMouseEnter={async () => {
                    try {
                      await router.preloadRoute({
                        to: "/funds/$slug/$id",
                        params: { id: d.id, slug: d.title.split(" ")[0] },
                        search: (prev) => prev,
                      });
                    } catch (err) {
                      // Failed to preload route
                    }
                  }}
                  onClick={() => {
                    navigate({
                      to: "/funds/$slug/$id",
                      params: { id: d.id, slug: d.title.split(" ")[0] },
                      search: (prev) => prev,
                    });
                  }}
                >
                  {d.title}
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      </Stack>
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
