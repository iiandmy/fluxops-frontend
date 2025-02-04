import { FaMoon, FaSun } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { Theme } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';

import { selectTheme, toggleTheme } from '~/store/theme';

import { Button } from '../button';
import { GenericWrapper } from '../generic-wrapper';
import { navItems } from './config';
import css from './header.module.css';

export const Header = () => {
	const theme = useAppSelector(selectTheme);
	const dispatch = useAppDispatch();

	const toggleThemeClick = () => {
		dispatch(toggleTheme());
	};

	return (
		<header className={css.wrapper}>
			<GenericWrapper>
				<div className={css.container}>
					<nav className={css.nav}>
						{navItems.map(({ id, title, href }) => (
							<NavLink
								className={({ isActive }) =>
									[isActive ? css.nav_item_active : '', css.nav_item].join(' ')
								}
								key={id}
								to={href}
							>
								{title}
							</NavLink>
						))}
					</nav>
					<div className={css.content_container}>
						<Button onClick={toggleThemeClick} variant="primary">
							{theme === Theme.Dark ? (
								<FaMoon size={25} color="var(--color-icon-muted)" />
							) : (
								<FaSun size={25} color="var(--color-icon-muted)" />
							)}
						</Button>
						<h1>FLUXOPS</h1>
					</div>
				</div>
			</GenericWrapper>
		</header>
	);
};
