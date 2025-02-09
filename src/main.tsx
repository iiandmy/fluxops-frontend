import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { appRouter } from '~/app';

import { LoadingPage } from '~/components';

import { appStore } from '~/store';

import '~/styles/index.css';
import { ThemeProvider } from '~/styles/providers';

import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider store={appStore}>
			<ThemeProvider>
				<SkeletonTheme
					baseColor="var(--color-light-gray-300)"
					highlightColor="var(--color-light-gray-500)"
				>
					<Toaster />
					<RouterProvider
						router={appRouter()}
						fallbackElement={<LoadingPage />}
					/>
				</SkeletonTheme>
			</ThemeProvider>
		</ReduxProvider>
	</StrictMode>
);
