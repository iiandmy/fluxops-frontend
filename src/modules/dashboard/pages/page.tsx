import { Plate } from '~/components';
import { useAppSelector } from '~/hooks';

import { ClientCard, ClientList } from '~/modules/dashboard/components';

import { useFetchClientsQuery } from '~/api/client';

import { selectClients } from '~/store/clients';

import css from './page.module.css';

export const ClientPage = () => {
	const clients = useAppSelector(selectClients);
	const { isLoading } = useFetchClientsQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	// if (clients.connections.length === 0) {
	// 	return <div>No connections</div>;
	// }

	const renderClients = () => {
		return (
			<div className={css.clients_list}>
				{clients.connections.map((connection) => (
					<ClientCard key={connection.id} client={connection} />
				))}
			</div>
		);
	};

	return (
		<div className={css.root}>
			{/* <ClientsDashboardCard /> */}
			{/* <ClientList items={renderClients()} /> */}
			<div className={css.left_widget_group}>
				<ClientList items={renderClients()} />
			</div>
			<div className={css.right_widget_group}>
				<Plate
					block={true}
					leftHeaderAddon={<div>123</div>}
					rightHeaderAddon={<div>123</div>}
				>
					123
				</Plate>
			</div>
			{/* <Button onClick={() => toast('bebra')}>123</Button> */}
		</div>
	);
};
