import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import css from './page.module.css';

export const UsersPage = () => {
	useTitle(PageTitle.Users);

	return <div className={css.root}>UsersPage</div>;
};
