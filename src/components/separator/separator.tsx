import cn from 'classnames';
import { FC } from 'react';

import { Direction } from '~/utils/types';

import css from './separator.module.css';

interface ISeparatorProps {
	/**
	 * Specify the direction of Separator. Currently
	 * supports the following: `horizontal`, `vertical`<br>
	 * default is `vertical`
	 */
	direction?: Direction;
}

const Separator: FC<ISeparatorProps> = ({ direction = 'vertical' }) => (
	<div className={cn(css.separator, css[direction])} />
);

export default Separator;
