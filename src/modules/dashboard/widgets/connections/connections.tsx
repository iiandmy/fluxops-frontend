import {
	ConnectionFilters,
	ConnectionList,
} from '~/modules/dashboard/components';

import { useClients } from '~/hooks/clients';

import css from './connections.module.css';

const filterConfig = [
	{
		label: 'Active',
		value: 'a',
	},
	{
		label: 'Inactive',
		value: 'i',
	},
	{
		label: 'Waiting',
		value: 'w',
	},
];

export const Connections = () => {
	const { clients, isLoading } = useClients();

	return (
		<div className={css.wrapper}>
			<ConnectionFilters values={filterConfig} activeFilter={{ value: 'a' }} />
			<ConnectionList items={clients.connections} showSkeleton={isLoading} />
		</div>
	);
};
