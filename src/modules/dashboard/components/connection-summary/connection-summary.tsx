import { FC } from 'react';

import css from './connection-summary.module.css';
import { ConnectionSummarySkeleton } from './connection-summary.skeleton';

interface IConnectionSummaryProps {
	showSkeleton: boolean;
	totalActiveConnections: number;
	totalInactiveConnections: number;
}

export const ConnectionSummary: FC<IConnectionSummaryProps> = ({
	showSkeleton,
	totalActiveConnections,
	totalInactiveConnections,
}) => {
	if (showSkeleton) return <ConnectionSummarySkeleton />;

	return (
		<div className={css.wrapper}>
			<div className={css.inactive}>{totalInactiveConnections}</div>
			<div className={css.active}>{totalActiveConnections}</div>
		</div>
	);
};
