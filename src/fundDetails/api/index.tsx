import { queryOptions } from "@tanstack/react-query";

export const fundDetailsQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ["fundDetails", id],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos/" + id)
        // .then(
        //   (response) =>
        //     new Promise((resolve) =>
        //       setTimeout(() => resolve(response), 3000)
        //     ) as Promise<Response>
        // )
        .then(
          (response) =>
            response.json() as Promise<{
              completed: boolean;
              id: number;
              title: string;
              userId: number;
            }>
        ),
  });
