import { FaRegCircle } from 'react-icons/fa6';

import { CommandLogList } from '~/modules/dashboard/components';

import { Section } from '~/components';

import { commandLogs } from '~/utils/mocks';

import css from './command-logs.module.css';

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
