import cn from 'classnames';
import { ComponentProps, ReactNode, forwardRef } from 'react';

import { Typography } from '../typography';

import css from './input.module.css';

type InputVariant = 'primary' | 'transparent';
type InputSize = 'sm' | 'md' | 'lg';
type InputStatus = 'error' | 'success';

interface IInputProps extends Omit<ComponentProps<'input'>, 'size'> {
	errorText?: string;
	variant?: InputVariant;
	size?: InputSize;
	status?: InputStatus;
	label?: string;
	icon?: ReactNode;
	block?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
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
