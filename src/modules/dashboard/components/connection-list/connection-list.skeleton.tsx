import { List } from '~/components';

import { ConnectionCardSkeleton } from './connection-card';

const skeletonCount = 8;

export const ConnectionListSkeleton = () => (
	<List block>
		{[...Array(skeletonCount)].map((_, key) => (
			<ConnectionCardSkeleton key={key} />
		))}
	</List>
);
