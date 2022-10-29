import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/store';

// ========
import ImgVector1 from '../assets/img/main/Vector 29.webp';
import ImgVector2 from '../assets/img/main/Vector 30.webp';
import ImgVector3 from '../assets/img/main/040322_2_1_22 4.webp';
import ImgTraced from '../assets/img/main/Traced.webp';
import ImgWar from '../assets/img/main/war-of-russia-against-ukraine-crying-boy-asks-to-stop-the-war-in-ukraine (1) 1.webp';
import ImgFilter1 from '../assets/img/main/image 18.webp';
import ImgFilter2 from '../assets/img/main/image 16.webp';
import ImgFilter3 from '../assets/img/main/image 17.webp';
import ImgFilter4 from '../assets/img/main/image 13.png';
import ImgFilter5 from '../assets/img/main/image 21.webp';
import ImgFilter6 from '../assets/img/main/image 23.webp';
import ImgFilter7 from '../assets/img/main/image24 .webp';
import Time from '../componets/Time';
import Slider from '../componets/Slider';
import QuestionHome from '../componets/QuestionHome';
import { setCatalogId, clearCatalog } from '../redux/slice/FilterSlice';

const listCategorii: Record<string, string>[] = [
	{ name: 'Стікери', value: 'Stiker', img: ImgFilter1 },
	{ name: 'Прапори', value: 'Prapor', img: ImgFilter2 },
	{ name: 'Плакати', value: 'Baner', img: ImgFilter3 },
	{ name: 'Худі', value: 'Sweatshirt', img: ImgFilter4 },
	{ name: 'Кепки', value: 'baysbolka', img: ImgFilter5 },
	{ name: 'Екосумки', value: 'sumka', img: ImgFilter6 },
];

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const addCategori = (obj: Record<string, string>) => {
		dispatch(clearCatalog());
		dispatch(setCatalogId(obj.value));
	};
	return (
		<main className="main">
			<section className="main__header header-main">
				<div className="header-main__container _container">
					<div className="header-main__body">
						<Time />

						<div className="header-main__content">
							<h1 className="header-main__title">
								{' '}
								<span> Війна Росії проти України — це світова загроза,</span> нищення демократії та невинних життів
							</h1>
							<p className="header-main__suptitle">
								Росія є винною у руйнуванні України і вбивстві невинних людей. Станьте причетними до перемоги над агресором
							</p>
							<a href="#help" className="header-main__button _button">
								Як допомогти?
							</a>
						</div>
					</div>
					<div className="header-main__ibg _ibg">
						<img src={ImgVector1} alt="main/Vector 29.webp" />
					</div>
					<div className="header-main__ibg _ibg">
						<img src={ImgVector2} alt="Vector 30.webp" />
					</div>
					<div className="header-main__gierl _ibg">
						<img src={ImgVector3} alt="main/040322_2_1_22 4.webp" />
					</div>
				</div>
			</section>
			<section className="main__whats whats-main">
				<div className="whats-main__container _container">
					<div className="whats-main__title _title">
						<h2>
							Що зараз відбувається <span> в Україні</span>
						</h2>
					</div>
					<Slider />
				</div>
			</section>
			<section className="main__world world">
				<div className="world__container _container">
					<div className="world__title _title">
						<h2>
							Чому це стосується <span>всього світу?</span>
						</h2>
					</div>
					<div className="world__body">
						<p>
							Зараз росія воює проти України, а також всього людства загалом. Московські загарбники прагнуть знищити демократію, свободу слова,
							моральні та духовні цінності.
						</p>
						<p>
							Україна бореться за ідеали всіх суверенних країн, таким чином, захищає громадян не лише своєї, а кожної держави світу. Наша Вітчизна
							протистоїть окупанту, чия найвища мета — це насильство.
						</p>
						<span>Україна, як щит, оберігає весь світ від російської агресії.</span>
					</div>
					<div className="world__ibg _ibg">
						<img src={ImgTraced} alt="main/Traced.webp" />
					</div>
				</div>
			</section>
			<section className="main__help help-main" id="help">
				<div className="help-main__container _container">
					<div className="help-main__title-fierst _title">
						<h2>
							Як ви <span> можете допомогти нам</span>
						</h2>
					</div>
					<div className="help-main__ibg _ibg">
						<img src={ImgWar} alt="main/war-of-russia-against-ukraine-crying-boy-asks-to-stop-the-war-in-ukraine (1) 1.webp" />
					</div>
					<div className="help-main__body">
						<div className="help-main__title _title">
							<h2>
								Як ви <span> можете допомогти нам</span>
							</h2>
						</div>
						<div className="help-main__content">
							<p>
								Сьогодні кожен може допомогти Україні виграти цю війну. Покажемо силу українського народу. А наша міць у підтримці. Ти можеш допомогти
								захистити нашу країну і світ від путінського насильства.{' '}
							</p>
							<p>Придбай сувеніри, із надрукованим гаслом, яке знає уже кожен в Європі та за океаном.</p>
							<span>Усі виручені кошти будуть передані на допомогу армії, а також на гуманітарні потреби.</span>
						</div>
						<Link className="help-main__button _button" to="Catalog">
							Здіснити покупку
						</Link>
					</div>
				</div>
			</section>
			<section className="main__catalog catalog">
				<div className="catalog__container _container">
					<div className="catalog__title">
						<h2>Категорії товарів</h2>
					</div>
					<div className="catalog__body">
						<div className="catalog__ikons">
							{listCategorii.map((obj: Record<string, string>, i: number) => (
								<div className="catalog__ikon" onClick={() => addCategori(obj)} key={i}>
									<div className="catalog__ibg _ibg">
										<Link to="Catalog">
											<img src={obj.img} alt="main/image 18.webp" />
										</Link>
									</div>
									<div className="catalog__linck">
										<Link to="Catalog">{obj.name}</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="main__question question">
				<div className="question__container _container">
					<div className="question__title">
						<h2>Часто задавані питання</h2>
					</div>
					<div className="question__body">
						<QuestionHome />
					</div>
				</div>
			</section>
			<section className="main__shop shop">
				<div className="shop__container _container">
					<div className="shop__ibg _ibg">
						<img src={ImgFilter7} alt="main/image 24.webp" />
					</div>
					<div className="shop__body">
						<div className="shop__title _title">
							<h2>
								<span> Зроби покупку, допоможи врятувати свою країну</span>
								та перемогти російських окупантів
							</h2>
						</div>
						<div className="shop__button _button">
							<Link to="catalog">Здіснити покупку</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
export default Home;
