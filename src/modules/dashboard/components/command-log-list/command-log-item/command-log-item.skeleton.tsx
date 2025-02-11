import cn from 'classnames';
import Skeleton from 'react-loading-skeleton';

import css from './command-log-item.module.css';

export const CommandLogItemSkeleton = () => (
	<div className={css.item_wrapper}>
		<div className={css.column_wrapper}>
			<Skeleton width="calc(100% - var(--gap-xs))" />
		</div>
		<div className={cn(css.column_wrapper, css.address_wrapper)}>
			<Skeleton width="calc(100% - var(--gap-xs))" />
		</div>
		<div className={cn(css.column_wrapper, css.command_wrapper)}>
			<Skeleton width="calc(100% - var(--gap-m))" />
		</div>
	</div>
);
