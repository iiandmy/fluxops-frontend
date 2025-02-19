import type { Meta, StoryObj } from '@storybook/react';

import Body from './body';
import mdx from './body.mdx';

const meta = {
	title: 'Typography/Body',
	component: Body,
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
		children: {
			control: false,
		},
	},
	args: {
		children:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi optio consequatur necessitatibus error praesentium explicabo doloribus? Corrupti ex eveniet magni eligendi blanditiis. Iusto sunt, quasi cum veniam debitis itaque provident?',
	},
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	args: {
		tag: 'span',
		variant: 'primary',
		fontSize: 'md',
		lineHeight: 'auto',
		weight: 'regular',
	},
};
