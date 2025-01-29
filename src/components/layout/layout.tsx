import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import css from './layout.module.css';

interface LayoutProps extends PropsWithChildren {
	headerSlot?: ReactNode;
	footerSlot?: ReactNode;
	sidebarSlot?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
	return (
		<div className={css.root}>
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
};
