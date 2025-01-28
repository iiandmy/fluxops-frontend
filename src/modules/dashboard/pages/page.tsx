import { useAppSelector } from '~/hooks';

import {
	ClientCard,
	ClientList,
	ClientsDashboardCard,
} from '~/modules/dashboard/components';

import { useFetchClientsQuery } from '~/api/client';

import { selectClients } from '~/store/clients';

import css from './page.module.css';

export const ClientPage = () => {
	const clients = useAppSelector(selectClients);
	const { isLoading } = useFetchClientsQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (clients.connections.length === 0) {
		return <div>No connections</div>;
	}

	const renderClients = () => {
		return (
			<>
				{clients.connections.map((connection) => (
					<ClientCard key={connection.id} client={connection} />
				))}
			</>
		);
	};

	return (
		<div className={css.root}>
			<ClientsDashboardCard />
			<ClientList items={renderClients()} />
		</div>
	);
};
