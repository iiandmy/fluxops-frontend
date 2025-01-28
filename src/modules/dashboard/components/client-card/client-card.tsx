import { FaCircle } from 'react-icons/fa6';

import styles from './client-card.module.css';
import { ClientCardProps } from './types';

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
	return (
		<div className={styles.client_card}>
			<FaCircle
				size={10}
				color={client.status === 'active' ? '#10B128' : '#FF3A3A'}
			/>
			<div>
				{`${client.hostname} - ${client.address.ip}  |  00-B0-D0-63-C2-26`}
			</div>
		</div>
	);
};
