import styl from './notfound.module.scss';

const NotFound: React.FC = () => {
	return (
		<div className={styl.root}>
			<div className={styl.wrapper}></div>
			<p className={styl.text}> такой сторінки не існує</p>
		</div>
	);
};
export default NotFound;
