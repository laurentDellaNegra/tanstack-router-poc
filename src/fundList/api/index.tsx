import { queryOptions } from "@tanstack/react-query";

export const fundListQueryOptions = queryOptions({
  queryKey: ["fundList"],
  queryFn: () =>
    fetch("https://jsonplaceholder.typicode.com/todos")
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
      ),
});
