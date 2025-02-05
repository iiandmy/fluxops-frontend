import { FC, PropsWithChildren } from 'react';

import css from './generic-wrapper.module.css';

export const GenericWrapper: FC<PropsWithChildren> = ({ children }) => (
	<div className={css.generic_wrapper}>{children}</div>
);
