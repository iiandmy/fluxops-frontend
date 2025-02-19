import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';
import mdx from './input.mdx';

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		docs: {
			page: mdx,
		},
	},
	argTypes: {
		className: {
			control: false,
		},
		icon: {
			control: false,
		},
		label: {
			control: 'text',
		},
		errorText: {
			control: 'text',
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		block: false,
		variant: 'primary',
		size: 'md',
	},
};

export const WithErrorAndLabel: Story = {
	args: {
		errorText: 'Error text',
		label: 'Label',
	},
};
