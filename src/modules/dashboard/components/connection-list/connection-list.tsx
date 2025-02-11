import { FC } from 'react';

import { List } from '~/components';

import { Client } from '~/store/clients';

import { ConnectionCard } from './connection-card';
import { ConnectionListSkeleton } from './connection-list.skeleton';

interface IConnectionListProps {
	items: Client[];
	showSkeleton: boolean;
}

export const ConnectionList: FC<IConnectionListProps> = ({
	items,
	showSkeleton,
}) => {
	if (showSkeleton) return <ConnectionListSkeleton />;

	return (
		<List block>
			{items.map((connection) => (
				<ConnectionCard key={connection.id} item={connection} />
			))}
		</List>
	);
};
