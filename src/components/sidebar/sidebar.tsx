import { Button } from '~/components';

import css from './sidebar.module.css';

export const Sidebar = () => {
	return (
		<aside className={css.root}>
			<div className={css.logo}>Flux</div>
			<nav className={css.nav}>
				<Button variant="primary" className={css.nav_item}>
					1
				</Button>
				<Button variant="primary" className={css.nav_item}>
					2
				</Button>
				<Button variant="primary" className={css.nav_item}>
					3
				</Button>
			</nav>
		</aside>
	);
};
