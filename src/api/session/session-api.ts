import { baseApi } from '~/api';

import { Session, User } from '~/store/session';

import { mapSession, mapUser } from '~/utils/mappers/session';

import { RequestLoginBody, SessionDto, UserDto } from './types';

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
		me: builder.query<User, void>({
			query: () => ({
				url: `/me`,
			}),
			transformResponse: (response: UserDto) => mapUser(response),
		}),
	}),
});

export const { useLoginMutation, useMeQuery } = sessionApi;
