import { selectClients } from "../../../../entities/client"
import { useFetchClientsQuery } from "../../../../entities/client/api/client-api";
import { useAppSelector } from "../../../../shared/model"
import { ClientCard } from "../../../../widgets/client-card/client-card.component";

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

  return (
    <div style={{ backgroundColor: "aliceblue", width: '100%', height: '100%' }}>
      {clients.connections.map((connection) => (
        <ClientCard client={connection} />
      ))}
    </div>
  )
}