import { IoHomeOutline } from 'react-icons/io5';
import { Button } from '~/components';

import css from './sidebar.module.css';

export const Sidebar = () => {
	return (
		<aside className={css.root}>
			{/* <div className={css.logo}>Flux</div> */}
			<nav className={css.nav}>
				<Button variant="primary" className={css.nav_item}>
					<div className={css.nav_item_icon}>
						<IoHomeOutline width={32} height={32} />
					</div>
					<p className={css.nav_item_text}>Dashboard</p>
				</Button>
				<Button variant="primary" className={css.nav_item}>
					<div className={css.nav_item_icon}>
						<IoHomeOutline width={32} height={32} />
					</div>
					<p className={css.nav_item_text}>Dashboard</p>
				</Button>
				<Button variant="primary" className={css.nav_item}>
					<div className={css.nav_item_icon}>
						<IoHomeOutline width={32} height={32} />
					</div>
					<p className={css.nav_item_text}>Dashboard</p>
				</Button>
			</nav>
		</aside>
	);
};
