import { ReactElement, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '~/constants';

import { selectIsAuthorized } from '~/store/session';

import { useAppSelector } from '~/hooks/index';

import { BaseLayout } from './layout';

const DashboardPage = lazy(() => import('~/modules/dashboard/pages'));
const UsersPage = lazy(() => import('~/modules/users/pages'));
const AutomationPage = lazy(() => import('~/modules/automation/pages'));
const ClientsPage = lazy(() => import('~/modules/clients/pages'));
const SettingsPage = lazy(() => import('~/modules/settings/pages'));
const NotFoundPage = lazy(() => import('~/components/not-found'));
const ErrorPage = lazy(() => import('~/components/error'));

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
