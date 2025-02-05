import { FaRegCircle } from 'react-icons/fa6';
import { Section } from '~/components';

import { ScriptTemplateList } from '~/modules/dashboard/components';

import { templates } from './config';
import css from './script-templates.module.css';

export const ScriptTemplates = () => (
	<Section
		title="Script Templates"
		foldable
		rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
		headerClassName={css.header}
	>
		<ScriptTemplateList
			showSkeleton={false}
			items={templates}
			className={css.templates_wrapper}
		/>
	</Section>
);
