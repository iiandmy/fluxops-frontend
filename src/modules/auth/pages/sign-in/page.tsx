import { AuthWidget } from '~/modules/auth/widgets';

import { GenericWrapper } from '~/components';

import css from './page.module.css';

const SignInPage = () => (
	<GenericWrapper>
		<div className={css.page_wrapper}>
			<AuthWidget />
		</div>
	</GenericWrapper>
);

export default SignInPage;
