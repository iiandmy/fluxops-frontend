import cn from 'classnames';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { FontSize, LineHeight } from '../types';

import fonts from '../font-size.module.css';
import weights from '../font-weight.module.css';
import heights from '../line-height.module.css';
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
				css[variant],
				weights[weight],
				heights[`line_height_${lineHeight}`],
				fonts[`font_size_${fontSize}`],
				className
			)}
			ref={ref}
			{...restProps}
		>
			{children}
		</Component>
	)
);
