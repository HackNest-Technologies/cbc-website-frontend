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

    logout: builder.mutation({
      query: () => ({
        url: "session",
        method: "DELETE",
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
    // getEvent: builder.query({
    //   query: () => "/api/v1/events",
    // }),

    // In apiSlice.js
    getEvent: builder.query({
      query: ({ page = 1, per_page = 6, q = "" } = {}) => ({
        url: q ? "api/v1/events/find" : "api/v1/events",
        params: {
          page,
          per_page,
          ...(q && { q }),
        },
      }),
      transformResponse: (response, meta, arg) => {
        // Handle search response format (only IDs and titles)
        if (arg.q && Array.isArray(response)) {
          // Note: Search returns only {id, title} - no other data!
          return {
            data: response,
            total: response.length,
            total_pages: Math.ceil(response.length / arg.per_page),
            isSearchResult: true, // Flag to indicate limited data
          };
        }

        // Regular response (full event data)
        return {
          data: response,
          total: response.length,
          total_pages: Math.ceil(response.length / arg.per_page),
        };
      },
    }),
    updateEvent: builder.mutation({
      query: ({ id, event }) => ({
        url: `api/v1/events/${id}`,
        method: "PUT",
        body: event,
      }),
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

    getItemsByCategory: builder.query({
      query: ({ categoryId, page = 1, perPage = 4 }) => ({
        url: "api/v1/store_items",
        params: {
          store_item_category_id: categoryId,
          page: page,
          per_page: perPage,
        },
      }),
      transformResponse: (response) => ({
        items: response || [], // Wrap array in items property
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

    addLikedStoreItem: builder.mutation({
      query: (store_item_id) => ({
        url: "/api/v1/liked_store_items",
        method: "POST",
        body: {
          liked_store_item: {
            store_item_id,
          },
        },
      }),
    }),

    removeLikedStoreItem: builder.mutation({
      query: (store_item_id) => ({
        url: `/api/v1/liked_store_items/${store_item_id}`,
        method: "DELETE",
      }),
    }),

    // ======> CART <=======

    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "api/v1/cart_items",
        method: "POST",
        body: { cart_item: cartItem },
      }),
      invalidatesTags: ["Cart"],
    }),

    updateCart: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `api/v1/cart_items/${id}`,
        method: "PUT", // PATCH is also fine if Rails supports it
        body: {
          cart_item: { quantity },
        },
      }),
      invalidatesTags: ["Cart"],
    }),

    deleteCartItem: builder.mutation({
      query: (id) => ({
        url: `api/v1/cart_items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    CreateCart: builder.mutation({
      query: (cart) => ({
        url: "api/v1/carts",
        method: "POST",
        body: { cart },
      }),
    }),

    getCart: builder.query({
      query: (id) => `api/v1/carts/${id}`,
      providesTags: ["Cart"],
    }),

    // Send all order with the cart id
    createOrder: builder.mutation({
      query: (order) => ({
        url: "api/v1/orders",
        method: "POST",
        body: { order: order },
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

    createBible: builder.mutation({
      query: (bible) => ({
        url: "api/v1/bible_readings",
        method: "POST",
        body: { bible_reading: bible },
      }),
    }),

    updateBible: builder.mutation({
      query: ({ id, bible }) => ({
        url: `api/v1/bible_readings/${id}`,
        method: "PUT",
        body: bible,
      }),
    }),

    deleteBible: builder.mutation({
      query: (id) => ({
        url: `api/v1/bible_readings/${id}`,
        method: "DELETE",
      }),
    }),

    // Add Bible passages
    createBiblePassage: builder.mutation({
      query: (passage) => ({
        url: "api/v1/bible_passages",
        method: "POST",
        body: { bible_passage: passage },
      }),
    }),

    // ------- DAILY DEVOTIONAL----------
    getDailyDevotional: builder.query({
      query: () => "api/v1/devotionals",
    }),

    createDevotional: builder.mutation({
      query: (devotional) => ({
        url: "api/v1/devotionals",
        method: "POST",
        body: { devotional: devotional },
      }),
    }),

    updateDevotional: builder.mutation({
      query: ({ id, devotional }) => ({
        url: `api/v1/devotionals/${id}`,
        method: "PUT",
        body: devotional,
      }),
    }),

    deleteDevotion: builder.mutation({
      query: (id) => ({
        url: `api/v1/devotionals/${id}`,
        method: "DELETE",
      }),
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
    //    getPastSermon: builder.query({
    //   query: ({ page = 1, per_page = 10 } = {}) => ({
    //     url: "api/v1/past_sermons",
    //     params: {
    //       page,
    //       per_page
    //     }
    //   }),
    // }),

    getPastSermon: builder.query({
      query: ({ page = 1, per_page = 6, q = "" } = {}) => ({
        url: q ? "api/v1/past_sermons/find" : "api/v1/past_sermons",
        params: {
          page,
          per_page,
          ...(q && { q }), // Only add q parameter if it exists
        },
      }),
      // Transform response to maintain consistent structure
      transformResponse: (response, meta, arg) => {
        // Handle both search response format and regular paginated format
        if (arg.q && Array.isArray(response)) {
          // Search response format
          return {
            data: response,
            total: response.length,
            total_pages: Math.ceil(response.length / arg.per_page),
          };
        }
        return response;
      },
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

    // ----- BRANCHES -----
    getBranches: builder.query({
      query: () => "api/v1/branches",
    }),

    uploadBranch: builder.mutation({
      query: (branch) => ({
        url: "api/v1/branches",
        method: "POST",
        body: branch,
      }),
    }),

    updateBranch: builder.mutation({
      query: ({ id, branch }) => ({
        url: `api/v1/branches/${id}`,
        method: "PUT",
        body: branch,
      }),
    }),

    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `api/v1/branches/${id}`,
        method: "DELETE",
      }),
    }),

    // ---- FELLOWSHIP ------
    getFellowship: builder.query({
      query: () => "api/v1/house_fellowship_centres",
    }),

    uploadFellowship: builder.mutation({
      query: (fellowship) => ({
        url: "api/v1/house_fellowship_centres",
        method: "POST",
        body: fellowship,
      }),
    }),

    updateFellowship: builder.mutation({
      query: ({ id, fellowship }) => ({
        url: `api/v1/house_fellowship_centres/${id}`,
        method: "PUT",
        body: fellowship,
      }),
    }),

    deleteFellowship: builder.mutation({
      query: (id) => ({
        url: `api/v1/house_fellowship_centres/${id}`,
        method: "DELETE",
      }),
    }),

    membershipRegistration: builder.mutation({
      query: (membership) => ({
        url: "api/v1/membership_class_registrations",
        method: "POST",
        body: membership,
      }),
    }),

  }),
});
export const {
  useSignUpMutation,
  useCurrentUserQuery,
  useLoginMutation,
  useLogoutMutation,
  useGetEventQuery,
  useUpdateEventMutation,
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
  useCreateDevotionalMutation,
  useUpdateDevotionalMutation,
  useDeleteDevotionMutation,
  useGetBiblePassageQuery,
  useGetBibleInOneYearQuery,
  useCreateBibleMutation,
  useUpdateBibleMutation,
  useDeleteBibleMutation,
  useCreateBiblePassageMutation,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteCartItemMutation,
  useCreateCartMutation,
  useGetCartQuery,
  useCreateOrderMutation,
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
  useGetBranchesQuery,
  useUploadBranchMutation,
  useUpdateBranchMutation,
  useDeleteBranchMutation,
  useGetFellowshipQuery,
  useUploadFellowshipMutation,
  useUpdateFellowshipMutation,
  useDeleteFellowshipMutation,
  useGetItemsByCategoryQuery,
  useAddLikedStoreItemMutation,
  useRemoveLikedStoreItemMutation,
  useMembershipRegistrationMutation,
} = apiSlice;
