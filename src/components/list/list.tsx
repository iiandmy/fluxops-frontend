import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import { StyleConstants } from '~/constants';

import { Direction } from '~/utils/types';

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

interface IListProps extends ComponentProps<'div'> {
	/**
	 * Specify the direction of the List. Currently
	 * supports the following: `horizontal`, `vertical`<br>
	 * default is `vertical`
	 */
	direction?: Direction;

	/**
	 * Specify the gap between elements of the List. Currently
	 * supports the following: `number`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`<br>
	 * default is `0`
	 */
	gap?: Gap;

	/**
	 * Specify if the scrollbar should be hidden.
	 * default is `false`
	 */
	hideScrollbar?: boolean;

	/**
	 * Specify if the list should fill 100% parent block width.
	 * default is `false`
	 */
	block?: boolean;

	/**
	 * Specify children to render them inside List.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children?: any;

	/**
	 * Specify an optional className to be applied to
	 * the list.
	 */
	className?: string;
}

const List: FC<IListProps> = ({
	direction = 'vertical',
	gap = 0,
	hideScrollbar = false,
	block = false,
	children,
	className,
}) => {
	if (children?.length === 0 || !children)
		//TODO: replace this text with image
		return <div className={css.empty}>no data</div>;

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

export default List;
