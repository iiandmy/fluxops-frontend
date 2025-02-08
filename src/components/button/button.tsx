import cn from 'classnames';
import { ComponentProps, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import css from './button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'transparent';
type ButtonSize = 'default' | 'sm' | 'md' | 'lg';
type ButtonShape = 'circle';
type ButtonRender = 'link';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';

interface ILinkProps {
	to?: string;
	replace?: boolean;
}

interface IButtonProps extends ComponentProps<'button'>, ILinkProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	shape?: ButtonShape;
	as?: ButtonRender;
	borderRadius?: ButtonRadius;
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
			replace = false,
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
				<Link
					to={to}
					className={computedClass}
					ref={ref as never}
					replace={replace}
				>
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
