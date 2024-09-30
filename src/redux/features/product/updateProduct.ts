/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

type UpdateProductArgs = {
  id: string;
  payload: any;
};

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation({
      query: ({ id, payload }: UpdateProductArgs) => ({
        url: `/product/update-product`,
        method: "PUT",
        body: payload,
        params: { id: id },
      }),
      invalidatesTags: ["Product", "ProductByCategory"],
    }),
  }),
});

export const { useUpdateProductMutation } = productsApi;