import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { AppRoutes } from '~/constants';

import { AuthGuard, GuestGuard } from './components';
import { AuthLayout, BaseLayout } from './layout';

const DashboardPage = lazy(() => import('~/modules/dashboard/pages'));
const UsersPage = lazy(() => import('~/modules/users/pages'));
const AutomationPage = lazy(() => import('~/modules/automation/pages'));
const ClientsPage = lazy(() => import('~/modules/clients/pages'));
const SettingsPage = lazy(() => import('~/modules/settings/pages'));
const NotFoundPage = lazy(() => import('~/components/not-found'));
const ErrorPage = lazy(() => import('~/components/error'));
const SignInPage = lazy(() => import('~/modules/auth/pages/sign-in'));
const SignUpPage = lazy(() => import('~/modules/auth/pages/sign-up'));

export const appRouter = () =>
	createBrowserRouter([
		{
			element: BaseLayout,
			errorElement: <ErrorPage />,
			children: [
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
			element: AuthLayout,
			path: AppRoutes.Auth,
			errorElement: <ErrorPage />,
			children: [
				{
					path: AppRoutes.SignIn,
					element: (
						<AuthGuard>
							<SignInPage />
						</AuthGuard>
					),
				},
				{
					path: AppRoutes.SignUp,
					element: (
						<AuthGuard>
							<SignUpPage />
						</AuthGuard>
					),
				},
			],
		},
		{
			path: AppRoutes.NotFound,
			element: <NotFoundPage />,
		},
	]);
