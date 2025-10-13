import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cbc.space1.systemsa.org/",
  }),
  endpoints: (builder) => ({
    // EVENT
    getEvent: builder.query({
      query: () => "/api/v1/events",
    }),

    createEvent: builder.mutation({
      query: (contact) => ({
        url: "api/v1/events",
        method: "POST",
        body: contact,
      }),
    }),

    //  STORE
    // ---------BOOKS CATEGORY----------
    getCategories: builder.query({
      query: () => "api/v1/store_item_categories",
    }),


    getBooksById: builder.query({
      query: (id) => `api/v1/store_item_categories/${id}`,
    }),


     createCategory: builder.mutation({
    query: (category) => ({
      url: "api/v1/store_item_categories",
      method: "POST",
      body: category,
    }),
  }),




  }),
});

export const {
  useGetEventQuery,
  useCreateEventMutation,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetBooksByIdQuery,
} = apiSlice;
