import { FC } from 'react';

import { CommandLog } from '~/modules/dashboard/types';

import { CommandLogItem } from './command-log-item';

import css from './command-log-list.module.css';

interface ICommandLogListProps {
	items: CommandLog[];
}

export const CommandLogList: FC<ICommandLogListProps> = ({ items }) => (
	<div className={css.list_wrapper}>
		{items.map((item) => (
			<CommandLogItem key={item.id} item={item} />
		))}
	</div>
);
