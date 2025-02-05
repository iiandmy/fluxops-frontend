import { ZodError, z } from 'zod';

const envVariablesSchema = z.object({
	VITE_SERVER_API_URL: z.string(),
	VITE_USE_MOCKS: z
		.string()
		.toLowerCase()
		.transform((x) => x === 'true')
		.pipe(z.boolean()),
	PROD: z.boolean(),
});

let env: z.infer<typeof envVariablesSchema>;

try {
	env = envVariablesSchema.parse(import.meta.env);
} catch (err: unknown) {
	console.warn('Check schema in lib/env');

	if (err instanceof ZodError) console.warn(err.errors);

	throw err;
}

export { env };
