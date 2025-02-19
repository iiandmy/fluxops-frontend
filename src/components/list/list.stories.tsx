import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../typography';
import List from './list';
import mdx from './list.mdx';

const items = [...Array(5)].map((_, key) => (
	<div style={{ border: '1px solid #000' }} key={key}>
		<Typography.Body fontSize="sm">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa
			reprehenderit corporis beatae, quis sit modi molestias dolorem sapiente ad
			quidem, quibusdam voluptatum nihil! Atque soluta earum debitis
			perspiciatis vel!
		</Typography.Body>
	</div>
));

const meta = {
	title: 'Layout/List',
	component: List,
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
		direction: {
			options: ['horizontal', 'vertical'],
			control: 'radio',
		},
		className: {
			control: false,
		},
	},
	args: {
		hideScrollbar: false,
		block: false,
		children: items,
		gap: 'lg',
	},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Horizontal: Story = {
	args: {
		direction: 'horizontal',
	},
};

export const Empty: Story = {
	args: {
		children: [],
		direction: 'vertical',
	},
};
