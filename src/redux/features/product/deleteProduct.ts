/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: "/product/delete-product",
        method: "DELETE",
        params: { id: id },
      }),
      invalidatesTags: ["Product", "ProductByCategory"],
    }),
  }),
});

export const { useDeleteProductMutation } = productsApi;