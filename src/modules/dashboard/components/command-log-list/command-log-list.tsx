import { FC } from 'react';

import { CommandLog } from '~/modules/dashboard/types';

import { List } from '~/components';

import { CommandLogItem } from './command-log-item';
import { CommandLogListSkeleton } from './command-log-list.skeleton';

interface ICommandLogListProps {
	items: CommandLog[];
	showSkeleton?: boolean;
}

export const CommandLogList: FC<ICommandLogListProps> = ({
	items,
	showSkeleton = true,
}) => {
	if (showSkeleton) return <CommandLogListSkeleton />;

	return (
		<List block>
			{items.map((item) => (
				<CommandLogItem key={item.id} item={item} />
			))}
		</List>
	);
};
