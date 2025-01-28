import { Client } from "~/store/clients";
import { baseApi } from "~/api";
import { FetchClientsResponse } from "./types";
import { mapResponse } from "~/utils/mappers/client";

export const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchClients: builder.query<Client[], void>({
      query: () => ({
        url: '/clients',
      }),
      transformResponse: (response: FetchClientsResponse) => mapResponse(response),
    })
  })
});

export const { useFetchClientsQuery } = clientApi;
