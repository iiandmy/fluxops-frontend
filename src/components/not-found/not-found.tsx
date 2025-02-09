import { AppRoutes } from '~/constants';

import NotFoundImage from '~/assets/images/404.png';

import { Button } from '../button';
import { Image } from '../image';
import { Typography } from '../typography';

import css from './not-found.module.css';

const NotFoundPage = () => (
	<div className={css.wrapper}>
		<div className={css.content}>
			<Image src={NotFoundImage} width={600} height={280} />
			<Typography.Headlines tag="h1" variant="primary">
				Page Not Found
			</Typography.Headlines>
			<div className={css.button_wrapper}>
				<Button tag="a" to={AppRoutes.Dashboard} variant="secondary" replace>
					<Typography.Body fontSize="sm" variant="button">
						Home
					</Typography.Body>
				</Button>
			</div>
		</div>
	</div>
);

export default NotFoundPage;
