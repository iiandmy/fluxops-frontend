import { ClientStatus } from '~/store/clients';

export type Filter<T> = {
	label: string;
	value: T;
};

export type ClientFilter = Filter<ClientStatus>;
