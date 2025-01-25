import type { ReactElement, FC } from "react"

import css from './client-list.module.css';

interface ClientListProps {
  items: ReactElement;
}

export const ClientList: FC<ClientListProps> = (props) => {
  return (
    <div className={css.root}>
      Clients:
      {props.items}
    </div>
  )
}