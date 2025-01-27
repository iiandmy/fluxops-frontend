import { Button } from '@/shared/ui/button';
import css from './sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={css.root}>
      <div className={css.logo}>Fluxops</div>
      <div className={css.sidebar_content}>
        <Button 
          variant='primary'
          className={css.sidebar_item}
        >Dashboard</Button>
      </div>
    </div>
  )
}