import cn from 'classnames';
import { FC } from 'react';

import { CommandLog } from '~/modules/dashboard/types';

import { useTooltip } from '~/hooks';

import css from './command-log-item.module.css';

interface ICommandLogItemProps {
	item: CommandLog;
}

export const CommandLogItem: FC<ICommandLogItemProps> = ({ item }) => {
	const tooltip = useTooltip(item.id, item.client.address.ip);

	return (
		<div className={css.item_wrapper}>
			<div className={css.column_wrapper}>{item.client.hostname}</div>
			<div
				className={cn(css.column_wrapper, css.address_wrapper)}
				{...tooltip.config}
			>
				{item.client.address.ip}
			</div>
			<div className={cn(css.column_wrapper, css.command_wrapper)}>
				{item.command}
			</div>
			{tooltip.component}
		</div>
	);
};
