import { GenericWrapper, Separator } from '~/components';
import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import {
	CommandLogs,
	Connections,
	ResourceCapacity,
	ScriptTemplates,
} from '../widgets';

import css from './page.module.css';

const DashboardPage = () => {
	useTitle(PageTitle.Dashboard);

	return (
		<GenericWrapper>
			<div className={css.wrapper}>
				<Connections />
				<Separator />
				<div className={css.right_widgets}>
					<ResourceCapacity />
					<ScriptTemplates />
					<CommandLogs />
				</div>
			</div>
		</GenericWrapper>
	);
};

export default DashboardPage;
