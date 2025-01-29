import { Header, Layout, Sidebar } from '~/components';

export const BaseLayout = (
	<Layout sidebarSlot={<Sidebar />} headerSlot={<Header />} />
);
