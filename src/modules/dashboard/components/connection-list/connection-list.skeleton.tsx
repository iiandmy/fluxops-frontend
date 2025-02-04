import { ConnectionCardSkeleton } from './connection-card';
import css from './connection-list.module.css';

const skeletonCount = 8;

export const ConnectionListSkeleton = () => (
	<div className={css.list_wrapper}>
		{[...Array(skeletonCount)].map((_, key) => (
			<ConnectionCardSkeleton key={key} />
		))}
	</div>
);
