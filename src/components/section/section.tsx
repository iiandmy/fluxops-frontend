import cn from 'classnames';
import { ComponentProps, FC, ReactElement, ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import { Typography } from '~/components';

import css from './section.module.css';

interface ISectionStyleProps {
	/**
	 * Specify an optional className to be applied to
	 * the section header.
	 */
	headerClassName?: string;

	/**
	 * Specify an optional className to be applied to
	 * the section title.
	 */
	titleClassName?: string;

	/**
	 * Specify an optional className to be applied to
	 * the section right addon.
	 */
	rightAddonClassName?: string;

	/**
	 * Specify an optional className to be applied to
	 * the section body.
	 */
	bodyClassName?: string;
}

interface ISectionAddonProps {
	/**
	 * Specify an optional left addon to render it inside header in left side.
	 */
	leftHeaderAddon?: ReactElement;

	/**
	 * Specify an optional right addon to render it inside header in right side.
	 */
	rightHeaderAddon?: ReactElement;

	/**
	 * Specify an optional inner addon to render it inside header.
	 */
	innerHeaderAddon?: ReactElement;
}

interface ISectionOwnProps {
	/**
	 * Specify if the Section should be foldable.<br>
	 * default is `false`
	 */
	foldable?: boolean;

	/**
	 * Specify if the Section should be expanded by default.<br>
	 * default is `true`
	 */
	defaultExpanded?: boolean;

	/**
	 * Specify the title of Section.
	 */
	title: string;

	/**
	 * Specify children to render them inside Section.
	 */
	children?: ReactNode;
}

type SectionProps = ISectionOwnProps &
	ISectionAddonProps &
	ISectionStyleProps &
	ComponentProps<'div'>;

const Section: FC<SectionProps> = ({
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
				{innerHeaderAddon && (
					<div className={css.inner_addon_wrapper}>{innerHeaderAddon}</div>
				)}
				{rightHeaderAddon}
			</div>
			{expanded && (
				<div className={cn(css.body_wrapper, bodyClassName)}>{children}</div>
			)}
		</div>
	);
};

export default Section;
