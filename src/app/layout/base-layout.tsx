import { Header, Layout, Sidebar } from '~/components';

export const baseLayout = (
	<Layout sidebarSlot={<Sidebar />} headerSlot={<Header />} />
);
