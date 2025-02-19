import type { Preview } from '@storybook/react';
import cn from 'classnames';

import '../src/styles/dark.css';
import '../src/styles/index.css';
import './storybook-global.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
			expanded: true,
			hideNoControlsWarning: true,
		},
	},
	decorators: [
		(Story, context) => {
			const theme = context.parameters.theme || context.globals.theme;

			return (
				<div className={cn({ dark: theme === 'dark' })}>
					<div className="story_container">
						<Story />
					</div>
				</div>
			);
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Set the global theme for displaying components',
			defaultValue: 'light',
			toolbar: {
				icon: 'paintbrush',
				items: [
					{ value: 'light', icon: 'sun', title: 'light' },
					{ value: 'dark', icon: 'moon', title: 'dark' },
				],
				showName: true,
			},
		},
	},
};

export default preview;
