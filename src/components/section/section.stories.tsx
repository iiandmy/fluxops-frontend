import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../typography';
import Section from './section';
import mdx from './section.mdx';

const meta = {
	title: 'Layout/Section',
	component: Section,
	parameters: {
		layout: 'centered',
		docs: {
			page: mdx,
		},
	},
	args: {
		title: 'Section',
		foldable: true,
		defaultExpanded: true,
		children: (
			<div>
				<Typography.Body fontSize="sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa
					reprehenderit corporis beatae, quis sit modi molestias dolorem
					sapiente ad quidem, quibusdam voluptatum nihil! Atque soluta earum
					debitis perspiciatis vel!
				</Typography.Body>
			</div>
		),
	},
	argTypes: {
		headerClassName: {
			control: false,
		},
		titleClassName: {
			control: false,
		},
		bodyClassName: {
			control: false,
		},
		rightAddonClassName: {
			control: false,
		},
		leftHeaderAddon: {
			control: false,
		},
		rightHeaderAddon: {
			control: false,
		},
		innerHeaderAddon: {
			control: false,
		},
		children: {
			control: false,
		},
	},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithAddons: Story = {
	args: {
		leftHeaderAddon: (
			<Typography.Body fontSize="sm">Left Addon</Typography.Body>
		),
		rightHeaderAddon: (
			<Typography.Body fontSize="sm">Right Addon</Typography.Body>
		),
		innerHeaderAddon: (
			<Typography.Body fontSize="sm">Inner Addon</Typography.Body>
		),
	},
};

export const NotFoldable: Story = {
	args: {
		foldable: false,
		defaultExpanded: true,
	},
};
