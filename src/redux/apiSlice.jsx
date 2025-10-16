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

    // STUDY
    // ----------- BIBLE N ONE YEAR -----------

    getBibleInOneYear: builder.query({
      query: () => "api/v1/bible_readings",
    }),

    getBiblePassage: builder.query({
      query: ({ passage, version = "kjv" }) => ({
        url: `https://bible-api.com/${encodeURIComponent(passage)}`,
        params: {
          translation: version,
        },
      }),
    }),

    // ------- DAILY DEVOTIONAL----------
    getDailyDevotional: builder.query({
      query: () => "api/v1/devotionals",
    }),
  }),
});

export const {
  useGetEventQuery,
  useCreateEventMutation,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetBooksByIdQuery,
  useGetDailyDevotionalQuery,
  useGetBiblePassageQuery,
  useGetBibleInOneYearQuery,
} = apiSlice;
