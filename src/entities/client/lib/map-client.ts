import { ClientDto, FetchClientsResponse } from "../api/types";
import { Client } from "../model/types";

export const mapClient = (dto: ClientDto): Client => {
  const [ip, port] = dto.address;
  return {
    ...dto,
    address:{ ip, port: port.toString() },
  };
}

export const mapResponse = (response: FetchClientsResponse): Client[] => {
  return Object.values(response).map(mapClient);
}