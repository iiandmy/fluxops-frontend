import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { env } from '~/lib';

export const baseQuery: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	object,
	FetchBaseQueryMeta
> = fetchBaseQuery({
	baseUrl: env.VITE_SERVER_API_URL,
	prepareHeaders: (headers) => {
		// Middleware to enrich with JWT Token

		// const { accessToken } = getState().session;

		// if (accessToken) {
		//   headers.set('Authorization', `Bearer ${accessToken}`);
		// }

		return headers;
	},
});

console.log(env.VITE_SERVER_API_URL);
