import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import css from './connection-card.module.css';

const skeletonConfig = {
	textDimensions: {
		width: 120,
		heigth: 40,
	},
};

const TextSkeleton: FC<{ width?: number }> = (props) => (
	<Skeleton {...skeletonConfig.textDimensions} {...props} />
);

export const ConnectionCardSkeleton = () => (
	<div className={css.wrapper}>
		<div className={css.upper_text_wrapper}>
			<TextSkeleton width={200} />
			{'-'}
			<TextSkeleton width={160} />
		</div>
		<div className={css.footer_wrapper}>
			<TextSkeleton width={200} />
			<TextSkeleton />
		</div>
	</div>
);
