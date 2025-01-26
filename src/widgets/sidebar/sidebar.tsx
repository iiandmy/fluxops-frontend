import css from './sidebar.module.css';

export const Sidebar = () => {
	return (
		<div className={css.sidebar_wrapper}>
			<div className={css.logo}>Fluxops</div>
		</div>
	);
};
