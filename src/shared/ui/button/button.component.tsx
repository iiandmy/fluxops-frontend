import { ComponentProps, FC } from 'react';
import classnames from 'classnames';

import css from './button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <button 
      className={classnames(
        css.root,
        css[`button-${props.variant}`],
        className
      )}
      {...restProps}
    >
      {props.children}
    </button>
  );
}