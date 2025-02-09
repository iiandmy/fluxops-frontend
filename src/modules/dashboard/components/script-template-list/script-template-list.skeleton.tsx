import cn from 'classnames';
import { FC } from 'react';

import { ScriptTemplateItemSkeleton } from './script-template-item';

import css from './script-template-list.module.css';

const skeletonCount = 6;

export const ScriptTemplateListSkeleton: FC<{ className?: string }> = ({
	className,
}) => (
	<div className={cn(css.wrapper, className)}>
		{[...Array(skeletonCount)].map((_, key) => (
			<ScriptTemplateItemSkeleton key={key} />
		))}
	</div>
);
