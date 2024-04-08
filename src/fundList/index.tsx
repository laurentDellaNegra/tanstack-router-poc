import { useSuspenseQuery } from "@tanstack/react-query";
import { fundListQueryOptions } from "./api";
import { Link, getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/funds");

export default function FundList() {
  const searchParams = route.useSearch();
  const { data } = useSuspenseQuery(fundListQueryOptions(searchParams));

  return (
    <>
      <h1>Fund List: </h1>
      <ul>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, page: 10 })}>
            10
          </Link>
        </li>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, page: 100 })}>
            100
          </Link>
        </li>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, page: 200 })}>
            200
          </Link>
        </li>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, type: "albums" })}>
            Albums
          </Link>
        </li>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, type: "photos" })}>
            Photos
          </Link>
        </li>
        <li>
          <Link to={route.id} search={(prev) => ({ ...prev, type: "todos" })}>
            Todos
          </Link>
        </li>
      </ul>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <Link
              from={route.id}
              to={"/funds/$slug/$id"}
              params={{ id: d.id, slug: d.title.split(" ")[0] }}
              search
            >
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
