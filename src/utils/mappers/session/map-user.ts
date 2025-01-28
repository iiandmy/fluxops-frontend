import { UserDto } from '~/api/session';

import { User } from '~/store/session';

export function mapUser(dto: UserDto): User {
	return {
		id: dto.id.toString(),
		email: dto.email,
	};
}
