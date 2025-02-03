import classNames from 'classnames';
import type { FC } from 'react';
import { FaQuestion, FaRegUser } from 'react-icons/fa6';
import { Plate } from '~/components';
import { StyleConstants } from '~/constants/styles';

import { ClientList } from '~/modules/dashboard/components';

import css from './clients.module.css';

export const Clients: FC = () => (
	<Plate
		block={true}
		leftHeaderAddon={<FaRegUser size={20} color="#FA5252" />}
		rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
		contentClassName={classNames(
			StyleConstants.hide_scrollbar,
			css.content_wrapper
		)}
		className={css.root}
	>
		<ClientList />
	</Plate>
);
