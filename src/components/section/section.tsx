import cn from 'classnames';
import { ComponentProps, FC, ReactElement, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import { Typography } from '../typography';
import css from './section.module.css';

interface ISectionStyleProps {
	headerClassName?: string;
	titleClassName?: string;
	rightAddonClassName?: string;
	bodyClassName?: string;
}

interface ISectionAddonProps {
	leftHeaderAddon?: ReactElement;
	rightHeaderAddon?: ReactElement;
	innerHeaderAddon?: ReactElement;
}

interface ISectionOwnProps {
	foldable?: boolean;
	defaultExpanded?: boolean;
	title: string;
}

type SectionProps = ISectionOwnProps &
	ISectionAddonProps &
	ISectionStyleProps &
	ComponentProps<'div'>;

export const Section: FC<SectionProps> = ({
	foldable = false,
	defaultExpanded = true,
	title,
	className,
	leftHeaderAddon,
	rightHeaderAddon,
	innerHeaderAddon,
	bodyClassName,
	children,
	headerClassName,
}) => {
	const [expanded, setExpanded] = useState(defaultExpanded);

	return (
		<div className={cn(css.wrapper, className)}>
			<div className={cn(css.header_wrapper, headerClassName)}>
				<div className={css.title_wrapper}>
					{leftHeaderAddon}
					<Typography.Headlines>{title}</Typography.Headlines>
					{foldable && (
						<FaChevronDown
							onClick={() => setExpanded((p) => !p)}
							className={cn(css.icon, { [css.icon_expand]: expanded })}
						/>
					)}
				</div>
				<div className={css.inner_addon_wrapper}>{innerHeaderAddon}</div>
				{rightHeaderAddon}
			</div>
			{expanded && (
				<div className={cn(css.body_wrapper, bodyClassName)}>{children}</div>
			)}
		</div>
	);
};
