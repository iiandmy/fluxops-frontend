import { FC } from 'react';

import { ConnectionSummarySkeleton } from './connection-summary.skeleton';

import css from './connection-summary.module.css';

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
