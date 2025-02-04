import Skeleton from 'react-loading-skeleton';

import css from './connection-summary.module.css';

export const ConnectionSummarySkeleton = () => (
	<div className={css.wrapper}>
		<Skeleton width={30} />
		<Skeleton width={30} />
	</div>
);
