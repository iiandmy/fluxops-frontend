import Skeleton from 'react-loading-skeleton';

import css from './client-card.module.css';

export const ClientCardSkeleton = () => {
	return (
		<div className={css.root}>
			<Skeleton circle={true} width={10} height={10} />
			<div className={css.content}>
				<Skeleton />
				<Skeleton />
				<Skeleton />
			</div>
		</div>
	);
};
