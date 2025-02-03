import { ComponentProps, FC, ReactElement, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

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
	leftHeaderAddon,
	rightHeaderAddon,
	innerHeaderAddon,
	children,
}) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<div className={css.wrapper}>
			<div className={css.header_wrapper}>
				<div className={css.title_wrapper}>
					{leftHeaderAddon}
					<div className={css.title}>{title}</div>
					{foldable && (
						<MdOutlineArrowBackIos
							className={css.icon}
							color="var(--color-icon-muted)"
							onClick={() => setExpanded((p) => !p)}
							style={{
								rotate: expanded ? '-90deg' : '-270deg',
							}}
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
