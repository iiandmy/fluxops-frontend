import { ReactElement } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, NotFoundPage } from '~/components';
import { AppRoutes } from '~/constants';

//TODO: rework for lazy import
import { AutomationPage } from '~/modules/automation/pages';
import { ClientsPage } from '~/modules/clients/pages';
import { DashboardPage } from '~/modules/dashboard/pages';
import { SettingsPage } from '~/modules/settings/pages';
import { UsersPage } from '~/modules/users/pages';

import { selectIsAuthorized } from '~/store/session';

import { useAppSelector } from '~/hooks/index';

import { BaseLayout } from './layout';

type GuestGuardedProps = {
	children: ReactElement;
};

const GuestGuard = ({ children }: GuestGuardedProps) => {
	// MOCK
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (!isAuthorized) return <Navigate to="/login" />;

	return children;
};

type AuthGuardedProps = {
	children: ReactElement;
};

const AuthGuard = ({ children }: AuthGuardedProps) => {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (isAuthorized) return <Navigate to="/" />;

	return children;
};

export const appRouter = () =>
	createBrowserRouter([
		{
			element: BaseLayout,
			errorElement: <ErrorPage />,
			children: [
				{
					path: AppRoutes.Login,
					element: (
						<AuthGuard>
							<div>login</div>
						</AuthGuard>
					),
				},
				{
					path: AppRoutes.Dashboard,
					element: (
						<GuestGuard>
							<DashboardPage />
						</GuestGuard>
					),
				},
				{
					path: AppRoutes.Users,
					element: (
						<GuestGuard>
							<UsersPage />
						</GuestGuard>
					),
				},
				{
					path: AppRoutes.Automation,
					element: (
						<GuestGuard>
							<AutomationPage />
						</GuestGuard>
					),
				},
				{
					path: AppRoutes.Clients,
					element: (
						<GuestGuard>
							<ClientsPage />
						</GuestGuard>
					),
				},
				{
					path: AppRoutes.Settings,
					element: (
						<GuestGuard>
							<SettingsPage />
						</GuestGuard>
					),
				},
			],
		},
		{
			path: AppRoutes.NotFound,
			element: <NotFoundPage />,
		},
	]);
