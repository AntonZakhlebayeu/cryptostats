import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserRequest } from "../dto/create-user-request.dto";
import { User } from "../models/User";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/user",
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: "/",
        method: "POST",
        body: createUserRequest,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
