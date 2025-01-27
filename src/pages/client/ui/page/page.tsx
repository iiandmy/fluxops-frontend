import { selectClients } from "@/entities/client";
import { useFetchClientsQuery } from "@/entities/client/api/client-api";
import { useAppSelector } from "@/shared/model";
import { ClientCard } from "@/widgets/client-card";
import { ClientList } from "@/widgets/client-list/client-list.component";
import { ClientsDashboardCard } from "@/widgets/clients-dashboard-card";

import css from './page.module.css';

export const ClientPage = () => {
  const clients = useAppSelector(selectClients);
  const { isLoading } = useFetchClientsQuery();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  };

  if (clients.connections.length === 0) {
    return (
      <div>No connections</div>
    )
  }

  const renderClients = () => {
    return (
      <>
        {clients.connections.map((connection) => (
          <ClientCard client={connection} />
        ))}
      </>
    )
  }

  return (
    <div className={css.root}>
      <ClientsDashboardCard />
      <ClientList items={renderClients()} />
    </div>
  )
}