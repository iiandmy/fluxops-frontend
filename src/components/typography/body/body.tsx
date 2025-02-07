import cn from 'classnames';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import fonts from '../fonts.module.css';
import heights from '../line-height.module.css';
import { FontSize, LineHeight } from '../types';
import css from './body.module.css';

type BodyTagType = 'div' | 'span' | 'p';

type NativeProps = HTMLAttributes<HTMLSpanElement>;

type BodyElementType = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement;

export type BodyVariant = 'primary' | 'secondary';

export type BodyProps = Omit<NativeProps, 'color'> & {
	tag?: BodyTagType;
	variant?: BodyVariant;
	fontSize?: FontSize;
	lineHeight?: LineHeight;
	weight?: 'bold' | 'regular' | 'light' | 'medium';
	className?: string;
	children?: ReactNode;
};

export const Body = forwardRef<BodyElementType, BodyProps>(
	(
		{
			tag: Component = 'span',
			variant = 'primary',
			fontSize = 'md',
			lineHeight = '2xl',
			weight = 'regular',
			className,
			children,
			...restProps
		},
		ref
	) => (
		<Component
			className={cn(
				css.component,
				css[weight],
				css[variant],
				heights[`line_height_${lineHeight}`],
				fonts[`font_${fontSize}`],
				className
			)}
			ref={ref as never}
			{...restProps}
		>
			{children}
		</Component>
	)
);
