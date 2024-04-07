import { useSuspenseQuery } from "@tanstack/react-query";
import { fundDetailsQueryOptions } from "./api";
import { Link, getRouteApi } from "@tanstack/react-router";

const route = getRouteApi("/funds/$slug/$id");

export default function FundDetails() {
  const params = route.useParams();
  const { data } = useSuspenseQuery(fundDetailsQueryOptions(params.id));
  return (
    <div>
      <Link from={route.id} to="/">
        Back
      </Link>
      <h1>Fund Details - params id: {params.id} </h1>
      <ul>
        <li>id: {data.id}</li>
        <li>title: {data.title}</li>
        <li>completed: {data.completed}</li>
        <li>userId: {data.userId}</li>
      </ul>
    </div>
  );
}
