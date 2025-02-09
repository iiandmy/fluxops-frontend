import { AppRoutes } from '~/constants';

import NotFoundImage from '~/assets/images/404.png';

import { Button } from '../button';
import { Image } from '../image';
import { Typography } from '../typography';
import css from './error.module.css';

export const ErrorPage = () => (
	<div className={css.wrapper}>
		<div className={css.content}>
			<Image src={NotFoundImage} width={600} height={280} />
			<Typography.Headlines tag="h1" variant="primary">
				Something went wrong
			</Typography.Headlines>
			<div className={css.buttons_wrapper}>
				<Button
					onClick={() => window.location.reload()}
					variant="transparent"
					block
				>
					<Typography.Body fontSize="sm" variant="button">
						Refresh
					</Typography.Body>
				</Button>
				<Button
					tag="a"
					to={AppRoutes.Dashboard}
					variant="secondary"
					replace
					block
				>
					<Typography.Body fontSize="sm" variant="button">
						Home
					</Typography.Body>
				</Button>
			</div>
		</div>
	</div>
);
