export interface ClientDto {
  id: string,
  address: [string, number],
  status: 'active' | 'inactive',
  hostname: string,
};

export interface FetchClientsResponse {
  [key: string]: ClientDto
}
