import cn from 'classnames';
import { ComponentProps, FC } from 'react';
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
	to?: string;
	block?: boolean;
	ghost?: boolean;
	borderRadius?: ButtonRadius;
}

export const Button: FC<IButtonProps> = ({
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
}) => {
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

	return as === 'link' && to ? (
		<Link to={to} className={computedClass}>
			{children}
		</Link>
	) : (
		<button className={computedClass} {...restProps}>
			{children}
		</button>
	);
};
