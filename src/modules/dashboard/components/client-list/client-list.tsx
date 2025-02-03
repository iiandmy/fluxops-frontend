import { Tooltip } from 'react-tooltip';

import { useClients } from '~/hooks/clients';

import { ClientCard } from '../client-card';
import css from './client-list.module.css';
import { ClientListSkeleton } from './client-list.skeleton';

export const ClientList = () => {
	const { clients, isLoading } = useClients();

	if (isLoading) return <ClientListSkeleton />;

	if (clients.connections.length === 0) return <div>No connections</div>;

	return (
		<div className={css.root}>
			{clients.connections.map((clientConnection) => (
				<ClientCard key={clientConnection.id} client={clientConnection} />
			))}
			<Tooltip id={`123_tooltip_address`} delayShow={1500} clickable />
		</div>
	);
};
