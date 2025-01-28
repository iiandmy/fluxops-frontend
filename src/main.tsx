import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import { appRouter } from '~/app/app-router';

import { appStore } from '~/store/app-store';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider store={appStore}>
			<Toaster />
			<RouterProvider router={appRouter()} />
		</ReduxProvider>
	</StrictMode>
);
