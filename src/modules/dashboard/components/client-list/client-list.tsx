import { useClients } from '~/hooks/clients';

import { ClientCard } from '../client-card';
import css from './client-list.module.css';
import { ClientListSkeleton } from './client-list.skeleton';

export const ClientList = () => {
	const { clients, isLoading } = useClients();

	if (isLoading) return <ClientListSkeleton />;

	if (clients.connections.length === 0) {
		return <div>No connections</div>;
	}

	return (
		<div className={css.root}>
			{clients.connections.map((connection) => (
				<ClientCard key={connection.id} client={connection} />
			))}
		</div>
	);
};
