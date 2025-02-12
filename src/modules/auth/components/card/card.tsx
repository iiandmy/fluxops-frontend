import { PropsWithChildren } from 'react';

import css from './card.module.css';

export const Card = ({ children }: PropsWithChildren) => (
	<div className={css.card_wrapper}>{children}</div>
);
