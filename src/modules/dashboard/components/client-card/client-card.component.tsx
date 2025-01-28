import styles from './client-card.module.css';
import { ClientCardProps } from './types';

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
	return (
		<div className={styles.client_card}>
			{client.hostname}- {client.address.ip}:{client.address.port} <br />
			{client.status}
		</div>
	);
};
