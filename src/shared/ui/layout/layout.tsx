import type { PropsWithChildren, ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import css from './layout.module.css';

interface LayoutProps extends PropsWithChildren {
	navbarSlot?: ReactNode;
	headerSlot?: ReactNode;
	bottomSlot?: ReactNode;
	announcementSlot?: ReactNode;
	sidebarSlot?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<div className={css.root}>
			{props.sidebarSlot && (
				<aside className={css.sidebar}>{props.sidebarSlot}</aside>
			)}
			<div className={css.container}>
				<div className={css.content}>
					{props.announcementSlot}
					{props.navbarSlot}
					{props.headerSlot}
					<Outlet />
				</div>
				<footer className={css.footer}>
					<div className="text_sm">
						Copyright © {new Date().getFullYear()} RIT VARB. All Rights
						Reserved. <br />
						<a
							target="_blank"
							href="https://github.com/iiandmy/fluxops-frontend"
							rel="noreferrer"
						>
							Source Code
						</a>
					</div>
				</footer>
			</div>
			{props.bottomSlot}
			<ScrollRestoration />
		</div>
	);
};
