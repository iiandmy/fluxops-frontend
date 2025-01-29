import { FaQuestion } from 'react-icons/fa6';
import { GoProjectTemplate } from 'react-icons/go';
import { SlChart } from 'react-icons/sl';
import { TbLogs } from 'react-icons/tb';
import { Plate } from '~/components';
import { useAppSelector } from '~/hooks';

import { ClientCard, ClientList } from '~/modules/dashboard/components';

import { useFetchClientsQuery } from '~/api/client';

import { selectClients } from '~/store/clients';

import css from './page.module.css';

export const DashboardPage = () => {
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
			<div className={css.grid}>
				<div>
					<ClientList items={renderClients()} />
				</div>
				<div className={css.right_widget_group}>
					<Plate
						block={true}
						leftHeaderAddon={<SlChart size={24} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Load
					</Plate>
					<Plate
						block={true}
						leftHeaderAddon={<GoProjectTemplate size={28} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Templates
					</Plate>
					<Plate
						block={true}
						leftHeaderAddon={<TbLogs size={28} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Logs
					</Plate>
				</div>
			</div>
		</div>
	);
};
