import { Suspense } from 'react';

import { Layout, LoadingPage } from '~/components';

export const AuthLayout = (
	<Suspense fallback={<LoadingPage />}>
		<Layout />
	</Suspense>
);
