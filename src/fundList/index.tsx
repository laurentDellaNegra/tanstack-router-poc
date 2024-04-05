import { useSuspenseQuery } from "@tanstack/react-query";
import { fundListQueryOptions } from "./api";
import { Link, getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/funds");

export default function FundList() {
  const { data } = useSuspenseQuery(fundListQueryOptions);
  return (
    <>
      <h1>Fund List: </h1>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            <Link from={route.id} to={"/funds/$id"} params={{ id: d.id }}>
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}