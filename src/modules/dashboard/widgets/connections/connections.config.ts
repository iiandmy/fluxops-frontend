import { ClientLabeledFilter } from '~/modules/dashboard/types';

export const filters: ClientLabeledFilter[] = [
	{
		label: 'Active',
		value: 'active',
	},
	{
		label: 'Inactive',
		value: 'inactive',
	},
	{
		label: 'Waiting',
		value: 'waiting',
	},
];
