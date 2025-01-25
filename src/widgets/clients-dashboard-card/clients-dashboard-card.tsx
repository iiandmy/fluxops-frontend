import { useAppSelector } from '@/shared/model';
import { selectTotalActiveClients, selectTotalInactiveClients } from '@/entities/client';
import { FaCircleDot } from 'react-icons/fa6';

import css from './clients-dashboard-card.module.css';

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
      <FaCircleDot color={getStatusColor(status)} size={8} /> 
      {amount}
    </div>
  )
}

export const ClientsDashboardCard = () => {
  const activeClientsAmount = useAppSelector(selectTotalActiveClients);
  const inactiveClientsAmount = useAppSelector(selectTotalInactiveClients);

  return (
    <div className={css.root}>
      Dashboard<br/>
      <div className={css.status_wrapper}>
        <DashboardStatus amount={activeClientsAmount} status={'active'} />
        <DashboardStatus amount={inactiveClientsAmount} status={'inactive'} />
      </div>
    </div>
  );
};