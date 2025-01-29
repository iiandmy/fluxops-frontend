import css from './header.module.css';

export const Header = () => {
	return (
		<header className={css.root}>
			<div className={css.container}>
				<h1>FLUXOPS</h1>
				<div className={css.placeholder}></div>
			</div>
			<div className={css.container}>
				<div className={css.placeholder}></div>
				<div className={css.placeholder}></div>
			</div>
		</header>
	);
};
