import { useMemo } from 'react';

import { useFetchClientsQuery } from '~/api/client';

import { ClientStatus, selectClients } from '~/store/clients';

import { useAppSelector } from '../redux-hooks';

export const useClients = (filter?: ClientStatus) => {
	const clients = useAppSelector(selectClients);
	const { isLoading } = useFetchClientsQuery();

	const totalActiveClients = useMemo(
		() =>
			clients.connections.filter((client) => client.status === 'active').length,
		[clients.connections]
	);
	const totalInactiveClients = useMemo(
		() =>
			clients.connections.filter((client) => client.status === 'inactive')
				.length,
		[clients.connections]
	);

	const filteredClients = useMemo(
		() =>
			filter
				? clients.connections.filter(
						(connection) => connection.status === filter
					)
				: clients.connections,
		[filter, clients.connections]
	);

	return {
		clients: filteredClients,

		totalActiveClients,
		totalInactiveClients,

		isLoading,
	};
};
