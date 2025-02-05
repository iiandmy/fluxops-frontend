import cn from 'classnames';
import { ComponentProps, FC } from 'react';

import css from './button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface IButtonProps extends ComponentProps<'button'> {
	variant?: ButtonVariant;
}

export const Button: FC<IButtonProps> = (props) => {
	const { className, ...restProps } = props;

	return (
		<button
			className={cn(css.root, css[`button_${props.variant}`], className)}
			{...restProps}
		>
			{props.children}
		</button>
	);
};
