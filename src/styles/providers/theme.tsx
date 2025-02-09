import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import { Theme } from '~/constants';

import { selectTheme } from '~/store/theme';

import { useAppSelector } from '~/hooks';

import '../dark.css';
import css from './theme.module.css';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const theme = useAppSelector(selectTheme);

	return (
		<div className={cn({ dark: theme === Theme.Dark }, css.wrapper)}>
			{children}
		</div>
	);
};
