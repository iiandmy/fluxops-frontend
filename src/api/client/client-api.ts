import { baseApi } from '~/api';

import { Client } from '~/store/clients';

import { mapResponse } from '~/utils/mappers/client';

import { FetchClientsResponse } from './types';

export const clientApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		fetchClients: builder.query<Client[], void>({
			query: () => ({
				url: '/clients',
			}),
			transformResponse: (response: FetchClientsResponse) =>
				mapResponse(response),
		}),
	}),
});

export const { useFetchClientsQuery } = clientApi;
