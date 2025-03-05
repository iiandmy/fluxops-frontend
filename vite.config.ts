import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const ReactCompilerConfig = {
	target: '18',
};

export default defineConfig({
	plugins: [
		react({
			//@ts-expect-error from documentation https://react.dev/learn/react-compiler#usage-with-vite
			babel: {
				plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
			},
		}),
		tsconfigPaths(),
	],
});
