import { FaMoon, FaSun } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { Button, GenericWrapper, Typography } from '~/components';
import { Theme } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';

import { selectTheme, toggleTheme } from '~/store/theme';

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
							<NavLink className={css.nav_item} key={id} to={href}>
								{({ isActive }) => (
									<Typography.Headlines
										tag="h2"
										fontSize="md"
										variant={isActive ? 'primary' : 'secondary'}
									>
										{title}
									</Typography.Headlines>
								)}
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
						<Typography.Headlines tag="h1" fontSize="2xl" weight="bold">
							FLUXOPS
						</Typography.Headlines>
					</div>
				</div>
			</GenericWrapper>
		</header>
	);
};
