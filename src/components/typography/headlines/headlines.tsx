import cn from 'classnames';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import fonts from '../fonts.module.css';
import heights from '../line-height.module.css';
import { FontSize, LineHeight } from '../types';
import css from './headlines.module.css';

type HeadlinesTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

type NativeProps = HTMLAttributes<HTMLHeadingElement>;

type HeadlinesElementType = HTMLDivElement | HTMLHeadingElement;

export type HeadlinesVariant = 'primary' | 'secondary';

export type HeadlinesProps = Omit<NativeProps, 'color'> & {
	tag?: HeadlinesTagType;
	variant?: HeadlinesVariant;
	fontSize?: FontSize;
	lineHeight?: LineHeight;
	weight?: 'bold' | 'regular' | 'light' | 'medium';
	className?: string;
	children?: ReactNode;
};

export const Headlines = forwardRef<HeadlinesElementType, HeadlinesProps>(
	(
		{
			tag: Component = 'div',
			variant = 'primary',
			fontSize = 'lg',
			lineHeight = 'lg',
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
			ref={ref}
			{...restProps}
		>
			{children}
		</Component>
	)
);
