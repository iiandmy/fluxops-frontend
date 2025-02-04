import {
	ConnectionFilters,
	ConnectionList,
} from '~/modules/dashboard/components';

import { useClients } from '~/hooks/clients';

import css from './connections.module.css';

const filterConfig = [
	{
		label: 'Active',
		value: 'active',
	},
	{
		label: 'Inactive',
		value: 'inactive',
	},
	{
		label: 'Waiting',
		value: 'waiting',
	},
];

export const Connections = () => {
	const { clients, isLoading } = useClients();

	return (
		<div className={css.wrapper}>
			<ConnectionFilters
				values={filterConfig}
				activeFilter={{ value: 'a' }}
				showSkeleton={isLoading}
			/>
			<ConnectionList items={clients.connections} showSkeleton={isLoading} />
		</div>
	);
};
