import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import { ClientFilter } from '~/modules/dashboard/types';

import css from './connection-filters.module.css';
import { ConnectionFiltersSkeleton } from './connection-filters.skeleton';

interface IConnectionFiltersProps {
	values: ClientFilter[];
	activeFilter?: ClientFilter;
	showSkeleton: boolean;
	onFilterChange: (f: ClientFilter) => void;
}

interface IConnectionFilterProps extends ComponentProps<'button'> {
	label: string;
	isActive: boolean;
}

const ConnectionFilterItem: FC<IConnectionFilterProps> = ({
	label,
	isActive,
	...props
}) => (
	<button
		className={cn({ [css.item_active]: isActive }, css.item_wrapper)}
		{...props}
	>
		{label}
	</button>
);

export const ConnectionFilters: FC<IConnectionFiltersProps> = ({
	values,
	activeFilter,
	showSkeleton,
	onFilterChange,
}) => {
	if (showSkeleton) return <ConnectionFiltersSkeleton />;

	return (
		<div className={css.wrapper}>
			{values.map((filter) => (
				<ConnectionFilterItem
					key={filter.value}
					label={filter.label}
					onClick={() => onFilterChange(filter)}
					isActive={
						activeFilter !== undefined && activeFilter.value === filter.value
					}
				/>
			))}
		</div>
	);
};
