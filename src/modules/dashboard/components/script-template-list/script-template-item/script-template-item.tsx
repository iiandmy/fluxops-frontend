import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '~/constants';

import { ScriptTemplate } from '~/modules/dashboard/types';

import css from './script-template-item.module.css';

interface IScriptTemplateItemProps {
	item: ScriptTemplate;
}

export const ScriptTemplateItem: FC<IScriptTemplateItemProps> = ({ item }) => (
	<Link to={AppRoutes.Clients} className={css.template_item_wrapper}>
		{item.label}
	</Link>
);
