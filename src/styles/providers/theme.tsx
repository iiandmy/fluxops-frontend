import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Theme } from '~/constants';
import { useAppSelector } from '~/hooks';

import { selectTheme } from '~/store/theme';

import '../dark.css';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const theme = useAppSelector(selectTheme);

	return <div className={cn({ dark: theme === Theme.Dark })}>{children}</div>;
};
