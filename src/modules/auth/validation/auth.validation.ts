import { z } from 'zod';

const SignInSchema = z.object({
	login: z
		.string()
		.max(20, 'Username is max 20 characters long')
		.regex(
			new RegExp(/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/gm),
			'Username must include only letters, numbers, dots and underlines'
		),
	password: z
		.string()
		.max(20, 'Password can be only 20 characters long')
		.regex(
			new RegExp(/^[^._ ](?:[\w-]|\.[\w-])+[^._ ]$/gm),
			'Password must include only letters, numbers, dots and underlines'
		),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export { type SignInSchemaType, SignInSchema };
