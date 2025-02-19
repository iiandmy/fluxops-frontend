import type { Meta, StoryObj } from '@storybook/react';

import Separator from './separator';
import mdx from './separator.mdx';

const meta = {
	title: 'Layout/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
		docs: {
			page: mdx,
		},
	},
	argTypes: {
		direction: {
			options: ['vertical', 'horizontal'],
			control: 'radio',
		},
	},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		direction: 'vertical',
	},
};
