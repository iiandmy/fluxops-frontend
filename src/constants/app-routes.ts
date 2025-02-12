export enum AppRoutes {
	Dashboard = '/',
	Clients = '/clients',
	Automation = '/automation',
	Users = '/users',
	Settings = '/settings',
	Auth = '/auth',
	SignIn = Auth + '/sign_in',
	SignUp = Auth + '/sign_up',
	NotFound = '*',
}
