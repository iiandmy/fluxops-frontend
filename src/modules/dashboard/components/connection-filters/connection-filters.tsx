import cn from 'classnames';
import { FC } from 'react';

import { Filter } from '../types';
import css from './connection-filters.module.css';

interface IConnectionFiltersProps {
	values: Filter[];
	activeFilter?: Pick<Filter, 'value'>;
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
}) => (
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
