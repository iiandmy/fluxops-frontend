import { useState } from 'react';

import {
	ConnectionFilters,
	ConnectionList,
} from '~/modules/dashboard/components';
import { ClientFilter } from '~/modules/dashboard/types';

import { useClients } from '~/hooks/clients';

import css from './connections.module.css';

const filterConfig: ClientFilter[] = [
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
	const [activeFilter, setActiveFilter] = useState<ClientFilter | undefined>();
	const { clients, isLoading } = useClients(activeFilter?.value);

	const handleChangeFilter = (newFilter: ClientFilter) => {
		if (newFilter?.value === activeFilter?.value) {
			setActiveFilter(undefined);
			return;
		}

		setActiveFilter(newFilter);
	};

	return (
		<div className={css.wrapper}>
			<ConnectionFilters
				values={filterConfig}
				activeFilter={activeFilter}
				onFilterChange={handleChangeFilter}
				showSkeleton={isLoading}
			/>
			<ConnectionList items={clients} showSkeleton={isLoading} />
		</div>
	);
};
