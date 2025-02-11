import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import { StyleConstants } from '~/constants';

import gaps from './gap.module.css';
import css from './list.module.css';

export type Gap =
	| '3xs'
	| '2xs'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| number;
export type Direction = 'horizontal' | 'vertical';

interface IListProps extends ComponentProps<'div'> {
	direction?: Direction;
	gap?: Gap;
	hideScrollbar?: boolean;
	block?: boolean;
}

export const List: FC<IListProps> = ({
	direction = 'vertical',
	gap = 0,
	hideScrollbar = false,
	block = false,
	children,
	className,
}) => {
	const isGapNumber = typeof gap === 'number';

	return (
		<div
			style={isGapNumber ? { gap: `${gap}px` } : undefined}
			className={cn(
				css.list_wrapper,
				css[direction],
				{
					[StyleConstants.hide_scrollbar]: hideScrollbar,
					[gaps[`gap_${gap}`]]: !isGapNumber,
					[css.block]: block,
				},
				className
			)}
		>
			{children}
		</div>
	);
};
