import { NavLink } from 'react-router-dom';

import { GenericWrapper } from '../generic-wrapper';
import { navItems } from './config';
import css from './header.module.css';

export const Header = () => (
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
				<h1>FLUXOPS</h1>
			</div>
		</GenericWrapper>
	</header>
);
