import { FaCircle } from 'react-icons/fa6';

import css from './client-card.module.css';
import { ClientCardProps } from './types';

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
	return (
		<div className={css.root}>
			<FaCircle
				size={10}
				color={client.status === 'active' ? '#10B128' : '#FF3A3A'}
			/>
			<div className={css.content}>
				<div>{client.hostname}</div>
				<div>{client.address.ip}</div>
				<div className={css.mac_wrap}>00-B0-D0-63-C2-26</div>
			</div>
		</div>
	);
};
