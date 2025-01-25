import { ClientDto, FetchClientsResponse } from "../api/types";
import { Client } from "../model/types";

export const mapClient = (dto: ClientDto): Client => {
  return {
    ...dto,
    address:{ ip: dto.ip , port: dto.port.toString() },
  };
}

export const mapResponse = (response: FetchClientsResponse): Client[] => {
  return Object.keys(response).map((key) => mapClient({ ...response[key], hostname: key }));
}