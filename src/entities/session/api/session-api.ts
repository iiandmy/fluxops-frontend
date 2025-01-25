import { baseApi } from "@/shared/api";
import { Session, User } from "../model/types";
import { RequestLoginBody, SessionDto, UserDto } from "./types";
import { mapSession } from "../lib/map-session";
import { mapUser } from "../lib/map-user";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: `/login`,
        method: 'POST',
        body,
      }),
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
    // TODO: FSD: Move to entities/user/api/userApi.ts
    me: builder.query<User, void>({
      query: () => ({
        url: `/me`,
      }),
      transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = sessionApi