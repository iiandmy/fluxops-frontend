import { useAppSelector } from '~/hooks';
import { FaCircleDot } from 'react-icons/fa6';

import css from './clients-dashboard-card.module.css';
import { selectTotalActiveClients, selectTotalInactiveClients } from '~/store/clients';

const getStatusColor = (status: 'active' | 'inactive') => {
  if (status === 'active') return 'green';
  if (status === 'inactive') return 'red';
  return 'white';
}

const DashboardStatus = (
  { amount, status }: { amount: number, status: 'active' | 'inactive' }
) => {
  return (
    <div className={css.status}>
      <FaCircleDot color={getStatusColor(status)} size={14} /> 
      {amount}
    </div>
  )
}

export const ClientsDashboardCard = () => {
  const activeClientsAmount = useAppSelector(selectTotalActiveClients);
  const inactiveClientsAmount = useAppSelector(selectTotalInactiveClients);

  return (
    <div className={css.root}>
      <div className={css.status_wrapper}>
        <DashboardStatus amount={activeClientsAmount} status={'active'} />
        <DashboardStatus amount={inactiveClientsAmount} status={'inactive'} />
      </div>
    </div>
  );
};