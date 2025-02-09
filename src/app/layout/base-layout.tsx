import { Suspense } from 'react';

import { Header, Layout, LoadingPage } from '~/components';

export const BaseLayout = (
	<Suspense fallback={<LoadingPage />}>
		<Layout headerSlot={<Header />} />
	</Suspense>
);
