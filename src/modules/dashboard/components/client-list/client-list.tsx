import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import { FaQuestion, FaRegUser } from 'react-icons/fa6';
import { Plate } from '~/components';
import { StyleConstants } from '~/constants';

import css from './client-list.module.css';

interface ClientListProps {
	items: ReactElement;
}

export const ClientList: FC<ClientListProps> = (props) => {
	return (
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
			{props.items}
		</Plate>
	);
};
