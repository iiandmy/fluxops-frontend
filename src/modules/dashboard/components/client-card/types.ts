import { Client } from '~/store/clients';

export interface ClientCardProps {
	client: Client;
}

export enum ColorStatus {
	active = 'var(--color-status-success)',
	inactive = 'var(--color-status-failure',
}
