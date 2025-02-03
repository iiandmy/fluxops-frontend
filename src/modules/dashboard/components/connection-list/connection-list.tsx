import { FC } from 'react';

import { Client } from '~/store/clients';

import { ConnectionCard } from '../connection-card/connection-card';
import css from './connection-list.module.css';
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
		<div className={css.list_wrapper}>
			{items.map((connection) => (
				<ConnectionCard key={connection.id} item={connection} />
			))}
		</div>
	);
};
