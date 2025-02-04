import { FaRegCircle } from 'react-icons/fa6';
import { Section } from '~/components';

import { resourceCapacity } from '~/utils/mocks';

import { ResourceCapacityItem } from '../../components';
import css from './resource-capacity.module.css';

export const ResourceCapacity = () => (
	<Section
		title="Resource Capacity"
		foldable
		headerClassName={css.header}
		rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
	>
		<div className={css.content}>
			{resourceCapacity.map((item) => (
				<ResourceCapacityItem key={item.id} item={item} />
			))}
		</div>
	</Section>
);
