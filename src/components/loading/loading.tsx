import { Typography } from '../typography';
import css from './loading.module.css';

export const LoadingPage = () => (
	<div className={css.wrapper}>
		<div className={css.content}>
			<Typography.Headlines tag="h1" className={css.logo}>
				FLUXOPS
			</Typography.Headlines>
			<Typography.Body tag="p" variant="primary">
				Connecting...
			</Typography.Body>
		</div>
	</div>
);
