export type SessionUserId = string;

export type Session = {
	accessToken: string;
	userId: SessionUserId;
};

// TODO: FSD: Move user to entities/user/model/types.ts
export type User = {
	id: string;
	email: string;
};
