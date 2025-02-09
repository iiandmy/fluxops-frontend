import { PageTitle } from '~/constants';

import { useTitle } from '~/hooks';

import css from './page.module.css';

const AutomationPage = () => {
	useTitle(PageTitle.Automation);

	return <div className={css.root}>AutomationPage</div>;
};

export default AutomationPage;
