import { Typography } from '../typography';
import css from './loading.module.css';

export const LoadingPage = () => (
	<div className={css.wrapper}>
		<div className={css.content}>
			<Typography.Headlines
				tag="h1"
				fontSize="3xl"
				weight="bold"
				className={css.logo}
			>
				FLUXOPS
			</Typography.Headlines>
			<Typography.Body tag="p" variant="primary" className={css.connecting}>
				Connecting{' '}
			</Typography.Body>
		</div>
	</div>
);
