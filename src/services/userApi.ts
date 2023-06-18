import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../env";

type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState()?.user?.bearerToken;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getUsersData: builder.query({
      query: () => `/users?populate=*`,
    }),
    getUserData: builder.query({
      query: () => `/users/me?populate=*`,
    }),
    getWorkExperienceDescriptions: builder.query({
      query: () => `/experience-descriptions?populate=*`,
    }),
    getResumes: builder.query({
      query: () => `/resumes`,
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/local",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth-custom/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUsersDataQuery,
  useGetWorkExperienceDescriptionsQuery,
  useGetResumesQuery,
  useGetUserDataQuery,
  useLoginMutation,
  useSignupMutation,
} = userApi;
