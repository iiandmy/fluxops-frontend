import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import css from './layout.module.css';

interface ILayoutProps extends PropsWithChildren {
	headerSlot?: ReactNode;
	footerSlot?: ReactNode;
	sidebarSlot?: ReactNode;
}

export const Layout: FC<ILayoutProps> = (props) => (
	<div className={css.wrapper}>
		{props.headerSlot}
		<main className={css.content_wrapper}>
			{props.sidebarSlot}
			<div className={css.container}>
				<Outlet />
			</div>
			{props.footerSlot}
			<ScrollRestoration />
		</main>
	</div>
);
