/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (payload) => ({
        url: "/product/create-order",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Product", "ProductByCategory"],
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
