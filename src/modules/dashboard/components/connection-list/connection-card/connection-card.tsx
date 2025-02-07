import { FC } from 'react';

import { Client } from '~/store/clients';

import css from './connection-card.module.css';

interface IConnectionCardProps {
	item: Client;
}

export const ConnectionCard: FC<IConnectionCardProps> = ({ item }) => (
	<div className={css.wrapper}>
		<div>
			<div className={css.upper_text_wrapper}>
				{item.hostname} - {item.address.ip}
			</div>
			<div className={css.footer_wrapper}>
				00-B0-D0-63-C2-26
				<span className={css[item.status]}>{item.status}</span>
			</div>
		</div>
	</div>
);
