export type ClientDto = {
	id: string;
	ip: string;
	port: number;
	status: 'active' | 'inactive';
	hostname: string;
};

export type FetchClientsResponse = {
	[key: string]: ClientDto;
};
