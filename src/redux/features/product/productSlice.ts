import { baseApi } from "../../api/baseApi";


type UpdateProductArgs = {
    id: string;
    payload: any;
  };

const productsApi = baseApi.injectEndpoints({
    endpoints:(builder) =>({
        addNewProduct: builder.mutation({
            query: (payload) =>({
                url:'product/create-product',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["Product", "ProductByCategory"]
        }),
        getAllProducts: builder.query({
            query: ({
                category,
                sortBy,
                search,
                priceOrder,
                page=1,
                limit=6,
            }) =>{
                const queryParams = new URLSearchParams();

                if (category) queryParams.append("category", category);
                if (sortBy) queryParams.append("sortBy", sortBy);
                if (search) queryParams.append("search", search);
                if (priceOrder) queryParams.append("priceOrder", priceOrder);
                queryParams.append("page", page.toString());
                queryParams.append("limit", limit.toString());
                return {
                    url: `/product?${queryParams.toString()}`,
                    method: "GET",
                  };
            },
            providesTags:['Product']
        }),
        getAllProductByCategory: builder.query({
            query: (category) =>({
                url:'/product',
                method: 'GET',
                params: {category: category}
            }),
            providesTags:["ProductByCategory"]
        }),
        getSingleProduct: builder.query({
            query:(id) =>({
                url:`product/${id}`,
                method: 'GET',
            })
        }),
        productAvailabilityCheck: builder.mutation({
            query:(id) =>({
                url:`product/check-availability`,
                method: "POST",
                params: {id:id},
            })
        }),
        productUpdate: builder.mutation({
            query: ({ id, payload }: UpdateProductArgs) => ({
              url: `/product/update-product`,
              method: "PUT",
              body: payload,
              params: { id: id },
            }),
            invalidatesTags: ["Product", "ProductByCategory"],
          }),
          deleteProduct: builder.mutation({
            query: (id) => ({
              url: "/product/delete-product",
              method: "DELETE",
              params: { id: id },
            }),
            invalidatesTags: ["Product", "ProductByCategory"],
          }),
          orderCreate: builder.mutation({
            query: (payload) => ({
              url: "product/create-order",
              method: "POST",
              body: payload,
            }),
            invalidatesTags: ["Product", "ProductByCategory"],
          }),
    })
})


export const {useAddNewProductMutation, useGetAllProductsQuery, useGetAllProductByCategoryQuery, useGetSingleProductQuery,useProductAvailabilityCheckMutation, useProductUpdateMutation, useDeleteProductMutation,  useOrderCreateMutation } =productsApi