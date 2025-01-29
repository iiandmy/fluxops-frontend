import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import css from './page.module.css';

export const AutomationPage = () => {
	useTitle(PageTitle.Automation);

	return <div className={css.root}>AutomationPage</div>;
};
