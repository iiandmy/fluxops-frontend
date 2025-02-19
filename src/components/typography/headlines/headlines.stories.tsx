import type { Meta, StoryObj } from '@storybook/react';

import Headlines from './headlines';

const meta = {
	title: 'Typography/Headlines',
	component: Headlines,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		className: {
			control: false,
		},
		children: {
			control: false,
		},
	},
	args: {
		children: 'Heading',
	},
} satisfies Meta<typeof Headlines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		tag: 'h1',
		variant: 'primary',
		fontSize: 'lg',
		lineHeight: 'lg',
		weight: 'regular',
	},
};
