import { baseApi } from '../../../shared/api';
import { mapResponse } from '../lib/map-client';
import { Client } from '../model/types';
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
