export interface ClientDto {
	id: string;
	ip: string;
	port: number;
	status: 'active' | 'inactive';
	hostname: string;
}

export interface FetchClientsResponse {
	[key: string]: ClientDto;
}
