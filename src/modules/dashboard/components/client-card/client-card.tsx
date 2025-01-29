import { FaCircle } from 'react-icons/fa6';
import { Tooltip } from 'react-tooltip';
import { Separator } from '~/components';

import css from './client-card.module.css';
import { ClientCardProps, ColorStatus } from './types';

export const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
	return (
		<div className={css.root}>
			<FaCircle
				data-tooltip-id={`${client.id}_tooltip_status`}
				data-tooltip-content={client.status}
				size={10}
				color={ColorStatus[client.status]}
			/>
			<div className={css.content}>
				<div className={css.value_wrapper}>{client.hostname}</div>
				<Separator />
				<div
					className={css.value_wrapper}
					data-tooltip-id={`${client.id}_tooltip_address`}
					data-tooltip-content={`Port: ${client.address.port}`}
				>
					{client.address.ip}
				</div>
				<Separator />
				<div className={css.value_wrapper}>00-B0-D0-63-C2-26</div>
			</div>
			<Tooltip id={`${client.id}_tooltip_status`} />
			<Tooltip id={`${client.id}_tooltip_address`} clickable />
		</div>
	);
};
