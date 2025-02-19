import cn from 'classnames';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { FontSize, LineHeight } from '../types';

import fonts from '../font-size.module.css';
import weights from '../font-weight.module.css';
import heights from '../line-height.module.css';
import css from './body.module.css';

type BodyTagType = 'div' | 'span' | 'p';

type NativeProps = HTMLAttributes<HTMLSpanElement>;

type BodyElementType = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement;

export type BodyVariant = 'primary' | 'secondary' | 'button';

export type BodyProps = Omit<NativeProps, 'color'> & {
	/**
	 * Specify the tag render of the text element. Currently
	 * supports the following: `div`, `span`, `p`<br>
	 * default is `span`
	 */
	tag?: BodyTagType;

	/**
	 * Specify the variant of the text. Currently
	 * supports the following: `primary`, `secondary`, `button`<br>
	 * default is `primary`
	 */
	variant?: BodyVariant;

	/**
	 * Specify the font size of the text. Currently
	 * supports the following: `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`,`4xl`<br>
	 * default is `md`
	 */
	fontSize?: FontSize;

	/**
	 * Specify the line height of the text. Currently
	 * supports the following:  `auto`, `lg`, `2xl`<br>
	 * default is `auto`
	 */
	lineHeight?: LineHeight;

	/**
	 * Specify the font weight of the text. Currently
	 * supports the following:  `bold`, `regular`, `light`, `medium`<br>
	 * default is `regular`
	 */
	weight?: 'bold' | 'regular' | 'light' | 'medium';

	/**
	 * Specify an optional className to be applied to
	 * the text element.
	 */
	className?: string;

	/**
	 * Specify children to render them inside Body element.
	 */
	children?: ReactNode;
};

const Body = forwardRef<BodyElementType, BodyProps>(
	(
		{
			tag: Component = 'span',
			variant = 'primary',
			fontSize = 'md',
			lineHeight = 'auto',
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

export default Body;
