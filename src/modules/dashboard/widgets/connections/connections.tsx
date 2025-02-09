import { FaRegCircle } from 'react-icons/fa6';
import { Section } from '~/components';
import { useFilter } from '~/hooks';

import {
	ConnectionFilters,
	ConnectionList,
} from '~/modules/dashboard/components';

import { ClientStatus } from '~/store/clients';

import { useClients } from '~/hooks/clients';

import { ConnectionSummary } from '../../components/connection-summary';
import { filters } from './connections.config';

import css from './connections.module.css';

export const Connections = () => {
	const { activeFilter, updateActiveFilter } = useFilter<ClientStatus>();
	const { clients, totalActiveClients, totalInactiveClients, isLoading } =
		useClients(activeFilter?.value);

	return (
		<Section
			title="Connections"
			innerHeaderAddon={
				<ConnectionSummary
					showSkeleton={isLoading}
					totalActiveConnections={totalActiveClients}
					totalInactiveConnections={totalInactiveClients}
				/>
			}
			rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
		>
			<div className={css.wrapper}>
				<ConnectionFilters
					values={filters}
					activeFilter={activeFilter}
					onFilterChange={updateActiveFilter}
					showSkeleton={isLoading}
				/>
				<ConnectionList items={clients} showSkeleton={isLoading} />
			</div>
		</Section>
	);
};
