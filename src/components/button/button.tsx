import cn from 'classnames';
import { ComponentProps, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import css from './button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'transparent';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonShape = 'circle';
type ButtonRender = 'link';
type ButtonRadius = 'none' | 'small' | 'medium' | 'large';

interface IButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	shape?: ButtonShape;
	as?: ButtonRender;
	borderRadius?: ButtonRadius;
	to?: string;
	block?: boolean;
	ghost?: boolean;
}

export const Button = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	IButtonProps
>(
	(
		{
			className,
			variant = 'primary',
			size = 'medium',
			shape,
			as,
			to,
			children,
			block = false,
			borderRadius = 'none',
			ghost = false,
			...restProps
		},
		ref
	) => {
		const computedClass = cn(
			css.default,
			css[`button_variant_${variant}`],
			css[`button_size_${size}`],
			css[`button_shape_${shape}`],
			css[`button_border_radius_${borderRadius}`],
			{ [css.block]: block },
			{ [css.ghost]: ghost },
			className
		);

		if (as === 'link' && to) {
			return (
				<Link to={to} className={computedClass} ref={ref as never}>
					{children}
				</Link>
			);
		}

		return (
			<button className={computedClass} {...restProps} ref={ref as never}>
				{children}
			</button>
		);
	}
);
