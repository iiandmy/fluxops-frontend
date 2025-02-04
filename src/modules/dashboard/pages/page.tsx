import { GenericWrapper, Separator } from '~/components';
import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import { Connections, ResourceCapacity } from '../widgets';
import css from './page.module.css';

export const DashboardPage = () => {
	useTitle(PageTitle.Dashboard);

	return (
		<GenericWrapper>
			<div className={css.wrapper}>
				<Connections />
				<Separator />
				<ResourceCapacity />
			</div>
		</GenericWrapper>
	);
};
