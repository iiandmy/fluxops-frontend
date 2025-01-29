import { useNavigate } from 'react-router-dom';
import { Button } from '~/components';

import { NavItems } from './config';
import css from './sidebar.module.css';

export const Sidebar = () => {
	const navigate = useNavigate();

	return (
		<aside className={css.root}>
			<nav className={css.nav}>
				{NavItems.map(({ id, icon, title, href }) => (
					<Button
						variant="primary"
						className={css.nav_item}
						key={id}
						onClick={() => navigate(href)}
					>
						<div className={css.nav_item_icon}>{icon}</div>
						<p className={css.nav_item_text}>{title}</p>
					</Button>
				))}
			</nav>
		</aside>
	);
};
