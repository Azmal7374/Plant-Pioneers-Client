import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:"https://web-nursery-server.vercel.app/api/v1"
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Product", "ProductByCategory"],
  endpoints: () => ({}),
});

