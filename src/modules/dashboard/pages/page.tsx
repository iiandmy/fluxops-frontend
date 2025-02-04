import { FaRegCircle } from 'react-icons/fa6';
import { GenericWrapper, Section } from '~/components';
import { PageTitle } from '~/constants';
import { useTitle } from '~/hooks';

import { Connections } from '../widgets';
import css from './page.module.css';

export const DashboardPage = () => {
	useTitle(PageTitle.Dashboard);

	return (
		<GenericWrapper>
			<div className={css.wrapper}>
				<Connections />
				<div>
					<Section
						title="Connections"
						foldable
						innerHeaderAddon={
							<div
								style={{
									display: 'flex',
									gap: '12px',
									paddingLeft: '28px',
									fontSize: '22px',
									fontWeight: '200',
								}}
							>
								<div style={{ color: '#D59898' }}>10</div>
								<div style={{ color: '#98D5A3' }}>9</div>
							</div>
						}
						rightHeaderAddon={<FaRegCircle color="var(--color-icon-muted)" />}
					>
						bebra
					</Section>
				</div>
			</div>
		</GenericWrapper>
	);
};
