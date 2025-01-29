import Skeleton from 'react-loading-skeleton';
import { Separator } from '~/components';

import css from './client-card.module.css';

export const ClientCardSkeleton = () => {
	return (
		<div className={css.root}>
			<Skeleton circle={true} width={10} height={10} />
			<div className={css.content}>
				<Skeleton />
				<Separator />
				<Skeleton />
				<Separator />
				<Skeleton />
			</div>
		</div>
	);
};
