import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cbc.space1.systemsa.org",
  }),
  endpoints: (builder) => ({

    // Fetch all events
    getEvent: builder.query({
      query: () => "/api/v1/events",   
    }),

    // Create an event
    createEvent: builder.mutation({
      query: (contact) => ({
        url: "/api/v1/events",   
        method: "POST",
        body: contact,
      }),
    }),
  }),
});

export const { useGetEventQuery, useCreateEventMutation } = apiSlice;
