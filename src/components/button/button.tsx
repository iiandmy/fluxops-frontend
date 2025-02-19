import cn from 'classnames';
import { ComponentProps, ReactNode, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import css from './button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'transparent';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonTagType = 'a' | 'button';
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg';

interface IButtonProps extends ComponentProps<'button'> {
	/**
	 * Specify the variant of the Button. Currently
	 * supports the following: `primary`, `secondary`, `transparent`<br>
	 * default is `primary`
	 */
	variant?: ButtonVariant;

	/**
	 * Specify the size of the Button. Currently
	 * supports the following: `sm`, `md`, `lg`<br>
	 * default is `md`
	 */
	size?: ButtonSize;

	/**
	 * Specify the tag render of the Button. Currently
	 * supports the following: `link`, `button`<br>
	 * default is `button`
	 */
	tag?: ButtonTagType;

	/**
	 * Specify the border radius of the Button. Currently
	 * supports the following: `none`, `sm`, `md`, `lg`<br>
	 * default is `none`
	 */
	borderRadius?: ButtonRadius;

	/**
	 * Specify if the Button should be 100% width of parent block.<br>
	 * default is `false`
	 */
	block?: boolean;

	/**
	 * Specify if the Button should be not interacted.<br>
	 * default is `false`
	 */
	ghost?: boolean;

	/**
	 * Specify if the Button should be round.<br>
	 * default is `false`
	 */
	rounded?: boolean;

	/**
	 * Specify an optional className to be applied to
	 * the button.
	 */
	className?: string;

	/**
	 * Specify whether a Button should be disabled.<br>
	 * default is `false`
	 */
	disabled?: boolean;

	/**
	 * Specify href url to redirect.
	 */
	to?: string;

	/**
	 * Specify if redirect should replace browser history.<br>
	 * default is `false`
	 */
	replace?: boolean;

	/**
	 * Specify children to render them inside button.
	 */
	children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'md',
			rounded = false,
			tag = 'button',
			to,
			replace = false,
			children,
			block = false,
			borderRadius = 'none',
			ghost = false,
			disabled = false,
			...restProps
		},
		ref
	) => {
		const computedClass = cn(
			css.default,
			css[`button_variant_${variant}`],
			css[`button_size_${size}`],
			css[`button_border_radius_${borderRadius}`],
			{ [css.block]: block },
			{ [css.ghost]: ghost },
			{ [css.rounded]: rounded },
			{ [css.disabled]: disabled },
			className
		);

		if (tag === 'a' && to) {
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
			<button
				className={computedClass}
				disabled={disabled}
				{...restProps}
				ref={ref as never}
			>
				{children}
			</button>
		);
	}
);

export default Button;
