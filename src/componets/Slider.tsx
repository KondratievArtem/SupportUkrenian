import { Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImgSlider1 from '../assets/img/main/slider/image 1.webp';
import ImgSlider2 from '../assets/img/main/slider/image 3.webp';
import ImgSlider3 from '../assets/img/main/slider/Frame 1816.webp';
import ImgSlider4 from '../assets/img/main/slider/image 31.webp';

import 'swiper/scss';
import 'swiper/css/scrollbar';

const Slider: React.FC = () => {
	return (
		<Swiper
			modules={[Scrollbar, A11y]}
			spaceBetween={5}
			scrollbar={{ draggable: true }}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				450: {
					slidesPerView: 2,
				},
				769: {
					slidesPerView: 3,
				},
			}}>
			<SwiperSlide>
				<div className="slider__body slider__body_ibg ">
					<img src={ImgSlider1} alt="main/slider/image 1.webp" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slider__body slider__body_text">
					<p>
						Московські орки знищують життя, кидаючи бомби на лікарні, школи та житлові будинки. Нашій державі уже завдано збитків на сотні мільярдів
						доларів.
					</p>
				</div>
				<div className="slider__body slider__body_ibg">
					<img src={ImgSlider2} alt="main/slider/image 3.webp" />
				</div>
			</SwiperSlide>
			<SwiperSlide className="swiper-slider-revers">
				<div className="slider__body slider__body_text">
					<p>
						Ворожа зброя щодня вбиває мирних українців. В перші дні війни уже загинуло 90 дітей і кожного дня ця цифра росте. Число жертв цивільного
						населення остаточно невідома, бо людей і досі знаходять під руїнами багатоповерхівок.
					</p>
				</div>
				<div className="slider__body slider__body_ibg">
					<img src={ImgSlider3} alt="main/slider/Frame 1816.webp" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slider__body slider__body_ibg">
					<img src={ImgSlider4} alt="main/slider/image 31.webp" />
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
