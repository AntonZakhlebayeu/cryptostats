import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const coinbaseApi = createApi({
  reducerPath: "coinbaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/coinbase",
  }),
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPrimaryAccountTransactions: build.query<any, undefined>({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useGetPrimaryAccountTransactionsQuery } = coinbaseApi;
