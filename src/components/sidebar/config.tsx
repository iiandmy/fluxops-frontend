import {
	IoDesktopOutline,
	IoHomeOutline,
	IoPersonOutline,
	IoSettingsOutline,
} from 'react-icons/io5';
import { AppRoutes } from '~/constants';

export const NAV_ITEMS = [
	{
		id: 1,
		icon: <IoHomeOutline width={32} height={32} />,
		title: 'Dashboard',
		href: AppRoutes.Home,
	},
	{
		id: 2,
		icon: <IoPersonOutline width={32} height={32} />,
		title: 'Clients',
		href: AppRoutes.Clients,
	},
	{
		id: 3,
		icon: <IoDesktopOutline width={32} height={32} />,
		title: 'Automation',
		href: AppRoutes.Automation,
	},
	{
		id: 4,
		icon: <IoPersonOutline width={32} height={32} />,
		title: 'Users',
		href: AppRoutes.Users,
	},
	{
		id: 5,
		icon: <IoSettingsOutline width={32} height={32} />,
		title: 'Settings',
		href: AppRoutes.Settings,
	},
];
