export interface CapacityItem {
	id: number;
	name: string;
	capacity: number;
}

export const resourceCapacity: CapacityItem[] = [
	{
		id: 1,
		name: 'RAM',
		capacity: 15,
	},
	{
		id: 2,
		name: 'CPU',
		capacity: 52,
	},
	{
		id: 3,
		name: 'Volume',
		capacity: 100,
	},
];
