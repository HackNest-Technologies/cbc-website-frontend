import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cbc.space1.systemsa.org/",

    tagTypes: ["Books", "Cart", "User"],
    credentials: "include", // VERY IMPORTANT for cookies
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //  USER

    // Sign Up
    signUp: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: {
          user: user,
        },
      }),
    }),

    // CURRENT USER LOGGED IN

    currentUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
    }),

    // HOME
    // ======= Prayer Request ======
    sendPrayerRequest: builder.mutation({
      query: (prayer) => ({
        url: "api/v1/prayer_requests",
        method: "POST",
        body: prayer,
      }),
    }),

    // ===== Testimonies ========
    sendTestimony: builder.mutation({
      query: (testimony) => ({
        url: "api/v1/testimonies",
        method: "POST",
        body: testimony,
      }),
    }),

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

    // CART

    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/cart-items", // or your actual cart endpoint
        method: "POST",
        body: { cart_item: cartItem },
      }),
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
  useSignUpMutation,
  useCurrentUserMutation,
  useGetEventQuery,
  useCreateEventMutation,
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useGetBooksByIdQuery,
  useGetDailyDevotionalQuery,
  useGetBiblePassageQuery,
  useGetBibleInOneYearQuery,
  useAddToCartMutation,
  useSendPrayerRequestMutation,
  useSendTestimonyMutation,
} = apiSlice;
