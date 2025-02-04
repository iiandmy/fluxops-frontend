import cn from 'classnames';
import { FC } from 'react';

import { Filter } from '~/modules/dashboard/types';

import css from './connection-filters.module.css';
import { ConnectionFiltersSkeleton } from './connection-filters.skeleton';

interface IConnectionFiltersProps {
	values: Filter[];
	activeFilter?: Pick<Filter, 'value'>;
	showSkeleton: boolean;
}

interface IConnectionFilterProps {
	label: string;
	isActive: boolean;
}

const ConnectionFilterItem: FC<IConnectionFilterProps> = ({
	label,
	isActive,
}) => (
	<button className={cn({ [css.item_active]: isActive }, css.item_wrapper)}>
		{label}
	</button>
);

export const ConnectionFilters: FC<IConnectionFiltersProps> = ({
	values,
	activeFilter,
	showSkeleton,
}) => {
	if (showSkeleton) return <ConnectionFiltersSkeleton />;

	return (
		<div className={css.wrapper}>
			{values.map((filter) => (
				<ConnectionFilterItem
					key={filter.value}
					label={filter.label}
					isActive={
						activeFilter !== undefined && activeFilter.value === filter.value
					}
				/>
			))}
		</div>
	);
};
