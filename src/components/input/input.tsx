import cn from 'classnames';
import { ComponentProps, ReactNode, forwardRef } from 'react';

import { Typography } from '../typography';

import css from './input.module.css';

type InputVariant = 'primary' | 'transparent';
type InputSize = 'sm' | 'md' | 'lg';
type InputStatus = 'error' | 'success';

interface IInputProps extends Omit<ComponentProps<'input'>, 'size'> {
	/**
	 * Specify an optional validation error text to render under Input.
	 */
	errorText?: string;

	/**
	 * Specify the variant of the Button. Currently
	 * supports the following: `primary`, `transparent`<br>
	 * default is `primary`
	 */
	variant?: InputVariant;

	/**
	 * Specify the size of the Input. Currently
	 * supports the following: `sm`, `md`, `lg`<br>
	 * default `md`
	 */
	size?: InputSize;

	/**
	 * Specify the validation status of Input. Currently
	 * supports the folowing: `error`, `success`
	 */
	status?: InputStatus;

	/**
	 * Specify an optional label text to render above Input.
	 */
	label?: string;

	/**
	 * Specify an optional icon to render it inside Input.
	 */
	icon?: ReactNode;

	/**
	 * Specify if the Input should be 100% width of parent block.<br>
	 * default is `false`
	 */
	block?: boolean;

	/**
	 * Specify an optional className to be applied to
	 * the input.
	 */
	className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			className,
			errorText,
			variant = 'primary',
			size = 'md',
			status,
			label,
			icon,
			block = false,
			...restProps
		},
		ref
	) => (
		<div className={css.wrapper}>
			{label && <Typography.Body>{label}</Typography.Body>}
			<div className={css.input_wrapper}>
				{icon && <div className={css.icon}>{icon}</div>}
				<input
					ref={ref}
					className={cn(
						css.input,
						css[`input_${size}`],
						css[`input_${variant}`],
						css[`input_${status}`],
						{ [css.with_icon]: !!icon },
						{ [css.block]: block },
						className
					)}
					{...restProps}
				/>
			</div>
			{errorText && (
				<Typography.Body fontSize="sm" variant="secondary">
					{errorText}
				</Typography.Body>
			)}
		</div>
	)
);

export default Input;
