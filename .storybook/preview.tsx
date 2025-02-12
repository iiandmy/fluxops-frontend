import type { Preview } from '@storybook/react';
import cn from 'classnames';

import '../src/styles/dark.css';
import '../src/styles/index.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme = context.parameters.theme || context.globals.theme;

			return (
				<div className={cn({ dark: theme === 'dark' })}>
					<Story />
				</div>
			);
		},
	],
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Theme for components',
		defaultValue: 'light',
		toolbar: {
			items: [
				{ value: 'light', icon: 'sun', title: 'light' },
				{ value: 'dark', icon: 'moon', title: 'dark' },
			],
			showName: true,
		},
	},
};

export default preview;
