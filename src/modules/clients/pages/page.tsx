import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import css from './page.module.css';

export const ClientsPage = () => {
	useTitle(PageTitle.Clients);

	return <div className={css.root}>ClientsPage</div>;
};
