import type { SessionDto } from '~/api/session';

import type { Session, SessionUserId } from '~/store/session';

export function mapSession(dto: SessionDto): Session {
	return {
		accessToken: dto.accessToken,
		userId: dto.user.id as unknown as SessionUserId,
	};
}
