import { ClientDto, FetchClientsResponse } from '~/api/client';

import { Client } from '~/store/clients';

export const mapClient = (dto: ClientDto): Client => ({
	...dto,
	address: { ip: dto.ip, port: dto.port.toString() },
});

export const mapResponse = (response: FetchClientsResponse): Client[] =>
	Object.keys(response).map((key) =>
		mapClient({ ...response[key], hostname: key })
	);
