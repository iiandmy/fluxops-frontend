import { ClientCardSkeleton } from '../client-card';
import css from './client-list.module.css';

const skeletonCount = 3;

export const ClientListSkeleton = () => {
	return (
		<div className={css.root}>
			{[...Array(skeletonCount)].map((_, idx) => (
				<ClientCardSkeleton key={idx} />
			))}
		</div>
	);
};
