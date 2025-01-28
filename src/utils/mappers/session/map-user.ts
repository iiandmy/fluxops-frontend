import { UserDto } from "~/api/session/types";
import { User } from "~/store/session/types";

export function mapUser(dto: UserDto): User {
  return {
    id: dto.id.toString(),
    email: dto.email,
  }
}