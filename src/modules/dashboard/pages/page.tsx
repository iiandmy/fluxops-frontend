import { FaQuestion } from 'react-icons/fa6';
import { GoProjectTemplate } from 'react-icons/go';
import { SlChart } from 'react-icons/sl';
import { TbLogs } from 'react-icons/tb';
import { Plate } from '~/components';

import { Clients } from '../widgets';
import css from './page.module.css';

export const ClientPage = () => {
	return (
		<div className={css.root}>
			<div className={css.grid}>
				<div>
					<Clients />
				</div>
				<div className={css.right_widget_group}>
					<Plate
						block={true}
						leftHeaderAddon={<SlChart size={24} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Load
					</Plate>
					<Plate
						block={true}
						leftHeaderAddon={<GoProjectTemplate size={28} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Templates
					</Plate>
					<Plate
						block={true}
						leftHeaderAddon={<TbLogs size={28} color={'red'} />}
						rightHeaderAddon={<FaQuestion size={20} color="#737373" />}
					>
						Logs
					</Plate>
				</div>
			</div>
		</div>
	);
};
