import baseApi from "./baseApi";
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit = 10) => `products/?limit=${limit}`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    getProductsBySearch: builder.query({
      query: (search) => `products/search?q=${search}&limit=5`,
    }),
  }),
  overrideExisting: true,
});

export default productApi;
