import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist', 'node_modules'] },
	{
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			prettierRecommended,
			react.configs.flat.recommended,
			react.configs.flat['jsx-runtime'],
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier: prettier,
			react: react,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'react/function-component-definition': [
				2,
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/require-default-props': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
		},
	}
);
