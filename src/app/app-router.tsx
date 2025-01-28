import { ReactElement } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ClientPage } from '~/modules/dashboard/pages';

import { selectIsAuthorized } from '~/store/session';

import { useAppSelector } from '~/hooks/index';

import { baseLayout } from './layout';

type GuestGuardedProps = {
	children: ReactElement;
};

const GuestGuard = ({ children }: GuestGuardedProps) => {
	// MOCK
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (!isAuthorized) {
		return <Navigate to="/login" />;
	}

	return children;
};

type AuthGuardedProps = {
	children: ReactElement;
};

const AuthGuard = ({ children }: AuthGuardedProps) => {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (isAuthorized) {
		return <Navigate to="/" />;
	}

	return children;
};

export const appRouter = () =>
	createBrowserRouter([
		{
			element: baseLayout,
			errorElement: <div>error</div>,
			loader: async () => {
				return await (<>123</>);
			},
			children: [
				{
					path: '/login',
					element: (
						<AuthGuard>
							<div>login</div>
						</AuthGuard>
					),
				},
				{
					path: '/',
					element: (
						<GuestGuard>
							<ClientPage />
						</GuestGuard>
					),
				},
			],
		},
	]);
