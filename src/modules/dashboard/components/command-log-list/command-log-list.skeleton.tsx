import { List } from '~/components';

import { CommandLogItemSkeleton } from './command-log-item';

const skeletonCount = 5;

export const CommandLogListSkeleton = () => (
	<List block>
		{[...Array(skeletonCount)].map((_, key) => (
			<CommandLogItemSkeleton key={key} />
		))}
	</List>
);
