import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import { ScriptTemplate } from '../../types';
import { ScriptTemplateItem } from './script-template-item';
import { ScriptTemplateListSkeleton } from './script-template-list.skeleton';

import css from './script-template-list.module.css';

interface IScriptTemplateProps extends ComponentProps<'div'> {
	showSkeleton: boolean;
	items: ScriptTemplate[];
}

export const ScriptTemplateList: FC<IScriptTemplateProps> = ({
	items,
	showSkeleton,
	className,
}) => {
	if (showSkeleton) return <ScriptTemplateListSkeleton className={className} />;

	return (
		<div className={cn(css.wrapper, className)}>
			{items.map((item) => (
				<ScriptTemplateItem key={item.value} item={item} />
			))}
		</div>
	);
};
