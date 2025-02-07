import { FC } from 'react';
import { Button } from '~/components';
import { AppRoutes } from '~/constants';

import { ScriptTemplate } from '~/modules/dashboard/types';

interface IScriptTemplateItemProps {
	item: ScriptTemplate;
}

export const ScriptTemplateItem: FC<IScriptTemplateItemProps> = ({ item }) => (
	<Button to={AppRoutes.Clients} as="link" variant="secondary" size="large">
		{item.label}
	</Button>
);
