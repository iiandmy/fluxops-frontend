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

type HeadlinesProps = Omit<NativeProps, 'color'> & {
	/**
	 * Specify the tag render of the heading element. Currently
	 * supports the following: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`,<br>
	 * default is `div`
	 */
	tag?: HeadlinesTagType;

	/**
	 * Specify the variant of the heading. Currently
	 * supports the following: `primary`, `secondary`<br>
	 * default is `primary`
	 */
	variant?: HeadlinesVariant;
	/**
	 * Specify the font size of the heading. Currently
	 * supports the following: `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`,`4xl`<br>
	 * default is `md`
	 */
	fontSize?: FontSize;
	/**
	 * Specify the line height of the heading. Currently
	 * supports the following:  `auto`, `lg`, `2xl`<br>
	 * default is `auto`
	 */
	lineHeight?: LineHeight;
	/**
	 * Specify the font weight of the heading. Currently
	 * supports the following:  `bold`, `regular`, `light`, `medium`<br>
	 * default is `regular`
	 */
	weight?: 'bold' | 'regular' | 'light' | 'medium';
	/**
	 * Specify an optional className to be applied to
	 * the heading element.
	 */
	className?: string;

	/**
	 * Specify children to render them inside heading element.
	 */
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

export default Headlines;
