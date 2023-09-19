// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const DOG_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";
// interface Breed {
//   id: string;
//   name: string;
//   image: {
//     url: string;
//   };
// }
// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.thedogapi.com/v1",
//     prepareHeaders(headers) {
//       headers.set("x-api-key", DOG_API_KEY);
//       return headers;
//     },
//   }),
//   endpoints(builder) {
//     return {
//       fetchBreeds: builder.query<Breed[], number | void>({
//         query(limit = 15) {
//           return `/breeds?limit=${limit}`;
//         },
//       }),
//     };
//   },
// });
// export const { useFetchBreedsQuery } = apiSlice;
// nasa-api-slice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NASA_API_KEY = "bw1s833zZuKIBhBXnSH0vLmWuDC6zNV9gALT0i1n";

interface Asteroid {
  id: string;
  name: string;
}

export const apiSlice = createApi({
  reducerPath: "nasaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/neo/rest/v1",
  }),
  endpoints(builder) {
    return {
      fetchAsteroids: builder.query<Asteroid[], string>({
        query: (startDate) => `/feed?start_date=${startDate}&end_date=${startDate}&api_key=${NASA_API_KEY}`,
      }),
    };
  },
});

export const { useFetchAsteroidsQuery } = apiSlice;
