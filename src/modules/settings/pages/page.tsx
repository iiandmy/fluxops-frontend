import { PageTitle } from '~/constants';

import { useTitle } from '~/hooks';

import css from './page.module.css';

const SettingsPage = () => {
	useTitle(PageTitle.Settings);

	return <div className={css.root}></div>;
};

export default SettingsPage;
