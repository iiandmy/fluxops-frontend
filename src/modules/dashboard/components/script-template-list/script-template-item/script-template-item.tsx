import { FC } from 'react';

import { ScriptTemplate } from '~/modules/dashboard/types';

import { Button } from '~/components';

import { AppRoutes } from '~/constants';

interface IScriptTemplateItemProps {
	item: ScriptTemplate;
}

export const ScriptTemplateItem: FC<IScriptTemplateItemProps> = ({ item }) => (
	<Button to={AppRoutes.Clients} tag="a" variant="secondary" size="lg">
		{item.label}
	</Button>
);
