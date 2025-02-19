import { Meta, StoryObj } from '@storybook/react';

import Button from './button';
import mdx from './button.mdx';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			page: mdx,
		},
	},
	argTypes: {
		children: {
			control: false,
		},
		className: {
			control: false,
		},
		replace: {
			control: false,
		},
		to: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
	args: {
		block: false,
		rounded: false,
		disabled: false,
		ghost: false,
		replace: false,
		children: 'Button',
		variant: 'primary',
		size: 'md',
		tag: 'button',
		borderRadius: 'none',
	},
};
