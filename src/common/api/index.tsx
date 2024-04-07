import { queryOptions } from "@tanstack/react-query";

export const commonQueryOptions = queryOptions({
  queryKey: ["common"],
  queryFn: () =>
    fetch("https://jsonplaceholder.typicode.com/users")
      // .then(
      //   (response) =>
      //     new Promise((resolve) =>
      //       setTimeout(() => resolve(response), 3000)
      //     ) as Promise<Response>
      // )
      .then(
        (response) =>
          response.json() as Promise<{
            id: number;
            name: string;
            userName: string;
            email: string;
          }>
      ),
});
