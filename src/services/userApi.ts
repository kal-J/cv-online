import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../env";
import { useAppSelector } from "../stores/hooks";

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
    getWorkExperiences: builder.query({
      query: (admin_account_id) => `/work-experiences?filters[created_by_user_id][$eq]=${admin_account_id}`,
    }),
    getResumes: builder.query({
      query: (admin_account_id: number) => `/resumes?filters[created_by_user_id][$eq]=${admin_account_id}`,
    }),
    getSkills: builder.query({
      query: (admin_account_id: number) => `/skills?filters[created_by_user_id][$eq]=${admin_account_id}`,
    }),
    getEducations: builder.query({
      query: (admin_account_id: number) => `/educations?filters[created_by_user_id][$eq]=${admin_account_id}`,
    }),
    getReferences: builder.query({
      query: (admin_account_id: number) => `/references?filters[created_by_user_id][$eq]=${admin_account_id}`,
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
  useGetWorkExperiencesQuery,
  useGetResumesQuery,
  useGetSkillsQuery,
  useGetEducationsQuery,
  useGetReferencesQuery,
  useGetUserDataQuery,
  useLoginMutation,
  useSignupMutation,
} = userApi;
