import { queryOptions } from "@tanstack/react-query";
import { ApiSearch } from "../../routes/funds";

export const fundListQueryOptions = ({
  page = 200,
  type = "todos",
}: ApiSearch) =>
  queryOptions({
    queryKey: ["fundList", { page, type }],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/" + type)
        // .then(
        //   (response) =>
        //     new Promise((resolve) =>
        //       setTimeout(() => resolve(response), 3000)
        //     ) as Promise<Response>
        // )
        .then(
          (response) =>
            response.json() as Promise<
              Array<{
                completed: boolean;
                id: number;
                title: string;
                userId: number;
              }>
            >
        )
        .then((data) => data.slice(0, page)),
  });
