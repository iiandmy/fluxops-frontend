import classNames from 'classnames';
import { ComponentProps, FC, ReactElement, useMemo } from 'react';

import css from './plate.module.css';

interface PlateProps extends ComponentProps<'div'> {
	leftHeaderAddon?: ReactElement;
	rightHeaderAddon?: ReactElement;
	contentClassName?: string;
	headerClassName?: string;
	block?: boolean;
}

export const Plate: FC<PlateProps> = (props) => {
	const displayHeader = useMemo(
		() => props.leftHeaderAddon || props.rightHeaderAddon,
		[props.leftHeaderAddon, props.rightHeaderAddon]
	);

	return (
		<div
			className={classNames(
				css.root,
				{ [css.block]: props.block },
				props.className
			)}
		>
			{displayHeader && (
				<div className={classNames(css.header, props.headerClassName)}>
					{props.leftHeaderAddon}
					{props.rightHeaderAddon}
				</div>
			)}
			<div className={classNames(css.content, { [css.pt0]: displayHeader })}>
				<div
					className={classNames(css.content_wrapper, props.contentClassName)}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
};
