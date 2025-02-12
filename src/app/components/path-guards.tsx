import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoutes } from '~/constants';

import { selectIsAuthorized } from '~/store/session';

import { useAppSelector } from '~/hooks';

type GuardProps = {
	children: ReactElement;
};

const GuestGuard = ({ children }: GuardProps) => {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (!isAuthorized) return <Navigate to={AppRoutes.SignIn} />;

	return children;
};

const AuthGuard = ({ children }: GuardProps) => {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (isAuthorized) return <Navigate to={AppRoutes.Dashboard} />;

	return children;
};

export { AuthGuard, GuestGuard };
