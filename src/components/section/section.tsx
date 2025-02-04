import cn from 'classnames';
import { ComponentProps, FC, ReactElement, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

import css from './section.module.css';

interface SectionProps extends ComponentProps<'div'> {
	foldable?: boolean;
	title: string;
	leftHeaderAddon?: ReactElement;
	rightHeaderAddon?: ReactElement;
	innerHeaderAddon?: ReactElement;
	headerClassName?: string;
	titleClassName?: string;
	rightAddonClassName?: string;
	bodyClassName?: string;
}

export const Section: FC<SectionProps> = ({
	foldable = false,
	title,
	className,
	leftHeaderAddon,
	rightHeaderAddon,
	innerHeaderAddon,
	children,
	headerClassName,
}) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<div className={cn(css.wrapper, className)}>
			<div className={cn(css.header_wrapper, headerClassName)}>
				<div className={css.title_wrapper}>
					{leftHeaderAddon}
					<div className={css.title}>{title}</div>
					{foldable && (
						<FaChevronUp
							onClick={() => setExpanded((p) => !p)}
							className={cn(css.icon, { [css.icon_expand]: expanded })}
							color="var(--color-icon-muted)"
						/>
					)}
				</div>
				<div className={css.inner_addon_wrapper}>{innerHeaderAddon}</div>
				{rightHeaderAddon}
			</div>
			{expanded && <div className={css.body_wrapper}>{children}</div>}
		</div>
	);
};
