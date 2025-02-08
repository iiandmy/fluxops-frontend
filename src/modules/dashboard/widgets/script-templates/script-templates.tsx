import { FaRegCircle } from 'react-icons/fa6';
import { Section } from '~/components';

import { ScriptTemplateList } from '~/modules/dashboard/components';

import { templates } from '~/utils/mocks';

import css from './script-templates.module.css';

export const ScriptTemplates = () => (
	<Section
		title="Script Templates"
		foldable
		defaultExpanded={false}
		rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
		bodyClassName={css.templates_wrapper}
		headerClassName={css.header}
	>
		<ScriptTemplateList showSkeleton={false} items={templates} />
	</Section>
);
