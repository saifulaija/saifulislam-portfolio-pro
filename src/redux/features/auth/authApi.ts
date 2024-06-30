

import { baseApi } from "../../api/baseApi";

 const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log("auth", userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: (userInfo) => {
        console.log("auth/forget-password", userInfo);
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (userInfo) => {
        console.log("auth/forget-password", userInfo);
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation,useForgetPasswordMutation,useResetPasswordMutation } = authApi;
