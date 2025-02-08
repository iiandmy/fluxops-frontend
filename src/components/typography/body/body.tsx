import cn from 'classnames';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import fonts from '../font-size.module.css';
import weights from '../font-weight.module.css';
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
				css[variant],
				weights[weight],
				heights[`line_height_${lineHeight}`],
				fonts[`font_size_${fontSize}`],
				className
			)}
			ref={ref as never}
			{...restProps}
		>
			{children}
		</Component>
	)
);
