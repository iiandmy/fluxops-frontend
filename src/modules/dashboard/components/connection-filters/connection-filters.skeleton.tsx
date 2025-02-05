import Skeleton from 'react-loading-skeleton';

import css from './connection-filters.module.css';

const skeletonConfig = {
	count: 3,
	itemDimensions: {
		width: 60,
		height: 20,
	},
};

export const ConnectionFiltersSkeleton = () => (
	<div className={css.wrapper}>
		{[...Array(skeletonConfig.count)].map((_, key) => (
			<Skeleton {...skeletonConfig.itemDimensions} key={key} />
		))}
	</div>
);
