export interface Client {
	id: string;
	status: ClientStatus;
	address: { ip: string; port: string };
	hostname: string;
}

export type ClientStatus = 'active' | 'inactive' | 'waiting';
