import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cbc.space1.systemsa.org/",

    tagTypes: ["Books", "Cart", "User"],
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //  ======> USER <======

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

    login: builder.mutation({
      query: (user) => ({
        url: "session",
        method: "POST",
        body: user,
      }),
    }),

    // CURRENT USER LOGGED IN

    currentUser: builder.query({
      query: () => "session",
      transformResponse: (response) => response.user,
      providesTags: ["User"],
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
    getTestimonies: builder.query({
      query: () => "api/v1/testimonies",
    }),

    sendTestimony: builder.mutation({
      query: (testimony) => ({
        url: "api/v1/testimonies",
        method: "POST",
        body: testimony,
      }),
    }),

    updateTestimony: builder.mutation({
      query: ({ id, testimony }) => ({
        url: `api/v1/testimonies/${id}`,
        method: "PUT",
        body: testimony,
      }),
    }),

    deleteTestimony: builder.mutation({
      query: (id) => ({
        url: `api/v1/testimonies/${id}`,
        method: "DELETE",
      }),
    }),

    // ======> EVENT <========
    getEvent: builder.query({
      query: () => "/api/v1/events",
    }),

    createEvent: builder.mutation({
      query: (event) => ({
        url: "api/v1/events",
        method: "POST",
        body: event,
      }),
    }),

    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `api/v1/events/${id}`,
        method: "DELETE",
      }),
    }),

    // =======> STORE <=======

    // ---BOOKS CATEGORY---
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

    updateCategory: builder.mutation({
      query: ({ id, category }) => ({
        url: `api/v1/store_item_categories/${id}`,
        method: "PUT",
        body: category,
      }),
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `api/v1/store_item_categories/${id}`,
        method: "DELETE",
      }),
    }),

    // --- Book Items ---

    AddBookItem: builder.mutation({
      query: (category) => ({
        url: "api/v1/store_items",
        method: "POST",
        body: category,
      }),
    }),

    updateBookItem: builder.mutation({
      query: ({ id, product }) => ({
        url: `api/v1/store_items/${id}`,
        method: "PUT",
        body: product,
      }),
    }),

    deleteBookItem: builder.mutation({
      query: (id) => ({
        url: `api/v1/store_items/${id}`,
        method: "DELETE",
      }),
    }),

    // ======> CART <=======

    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/cart-items",
        method: "POST",
        body: { cart_item: cartItem },
      }),
    }),

    // =======> STUDY <=======
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

    // LIVE STREAM

    // Get Streaming links
    getStreamLinks: builder.query({
      query: () => "api/v1/livestreams",
    }),

    // --- Create live stream video ---
    uploadLiveStream: builder.mutation({
      query: (stream) => ({
        url: "api/v1/livestreams",
        method: "POST",
        body: stream,
      }),
    }),

    // --- Update live stream link ---
    updateLiveStream: builder.mutation({
      query: ({ id, stream }) => ({
        url: `api/v1/livestreams/${id}`,
        method: "PUT",
        body: stream,
      }),
    }),
    // ---Delete Stream Link

     deleteStreamLink: builder.mutation({
      query: (id) => ({
        url: `api/v1/livestreams/${id}`,
        method: "DELETE",
      }),
    }),


    // PAST SERMON
    // ------ Get past sermon ------
    getPastSermon: builder.query({
      query: () => "api/v1/past_sermons",
    }),

    uploadPastSermon: builder.mutation({
      query: (pastsermon) => ({
        url: "api/v1/past_sermons",
        method: "POST",
        body: pastsermon,
      }),
    }),

    upDatePastSermon: builder.mutation({
      query: ({ id, pastsermon }) => ({
        url: `api/v1/past_sermons/${id}`,
        method: "PUT",
        body: pastsermon,
      }),
    }),

    deletePastSermon: builder.mutation({
      query: (id) => ({
        url: `api/v1/past_sermons/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useCurrentUserQuery,
  useLoginMutation,
  useGetEventQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
  useGetCategoriesQuery,
  useGetBooksByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useAddBookItemMutation,
  useDeleteBookItemMutation,
  useUpdateBookItemMutation,
  useGetDailyDevotionalQuery,
  useGetBiblePassageQuery,
  useGetBibleInOneYearQuery,
  useAddToCartMutation,
  useSendPrayerRequestMutation,
  useGetTestimoniesQuery,
  useSendTestimonyMutation,
  useUpdateTestimonyMutation,
  useDeleteTestimonyMutation,
  useGetStreamLinksQuery,
  useUploadLiveStreamMutation,
  useUpdateLiveStreamMutation,
  useDeleteStreamLinkMutation,
  useGetPastSermonQuery,
  useUploadPastSermonMutation,
  useUpDatePastSermonMutation,
  useDeletePastSermonMutation,
} = apiSlice;
