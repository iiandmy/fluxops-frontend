import { useMemo } from 'react';

import { useFetchClientsQuery } from '~/api/client';

import { selectClients } from '~/store/clients';

import { useAppSelector } from '../hooks';

export const useClients = () => {
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

	return {
		clients,

		totalActiveClients,
		totalInactiveClients,

		isLoading,
	};
};
