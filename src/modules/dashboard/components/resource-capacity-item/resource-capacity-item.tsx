import cn from 'classnames';
import { FC } from 'react';

import { getResourceCapacityColor } from '~/modules/dashboard/helpers';

import { CapacityItem } from '~/utils/mocks';

import css from './resource-capacity-item.module.css';

interface ResourceCapacityItemProps {
	item: CapacityItem;
}

export const ResourceCapacityItem: FC<ResourceCapacityItemProps> = ({
	item,
}) => (
	<div>
		<h2 className={css.header}>
			{item.name} {item.capacity}%
		</h2>
		<div
			className={cn(css.progress, css[getResourceCapacityColor(item.capacity)])}
			//@ts-expect-error custom width property
			style={{ '--final-width': `${item.capacity}%` }}
		/>
	</div>
);
