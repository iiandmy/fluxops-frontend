import { FaRegCircle } from 'react-icons/fa6';
import { Section } from '~/components';

import { CommandLogList } from '~/modules/dashboard/components';

import css from './command-logs.module.css';
import { commandLogs } from './config';

export const CommandLogs = () => (
	<Section
		title="Command Logs"
		foldable
		className={css.wrapper}
		bodyClassName={css.body_wrapper}
		headerClassName={css.header}
		rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
	>
		<CommandLogList items={commandLogs} />
	</Section>
);
