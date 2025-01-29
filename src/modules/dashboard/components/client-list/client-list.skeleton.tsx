import { ClientCardSkeleton } from '../client-card';
import css from './client-list.module.css';

export const ClientListSkeleton = () => {
	return (
		<div className={css.root}>
			{[...Array(3)].map((_, idx) => (
				<ClientCardSkeleton key={idx} />
			))}
		</div>
	);
};
