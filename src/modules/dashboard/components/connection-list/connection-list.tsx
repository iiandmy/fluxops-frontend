import { FC } from 'react';

import { Client } from '~/store/clients';

import { ConnectionCard } from './connection-card';
import { ConnectionListSkeleton } from './connection-list.skeleton';

import css from './connection-list.module.css';

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
		<div className={css.list_wrapper}>
			{items.map((connection) => (
				<ConnectionCard key={connection.id} item={connection} />
			))}
		</div>
	);
};
