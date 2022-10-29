import React from 'react';

const Time: React.FC = () => {
	const [timeDeys, setTimeDeys] = React.useState<number>(0);
	const [timeHours, setTimeHours] = React.useState<number>(0);
	const [timeMinutes, setTimeMinutes] = React.useState<number>(0);

	// функционал для таймера времени

	// создание времени одчета==============================

	let date: number = new Date(2022, 1, 23).getTime(); // получение времени от которого наченаеться отчет
	// обновление таймера=============
	setInterval(function () {
		let dateNew: number = new Date().getTime(); // время на данный момент
		let distance: number = dateNew - date; // промежуток времени
		// высчитываем время
		setTimeDeys(Math.floor(distance / (1000 * 60 * 60 * 24))); // days
		setTimeHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))); // hours
		setTimeMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))); // minutes
	}, 1000);

	return (
		<div className="header-main__taim">
			<p className="header-main__text">Війна триває</p>

			<div className="header-main__colomns">
				<div className="header-main__ikon">
					<p className="header-main__dey ikon-title">{timeDeys}</p>
					<p>днів</p>
				</div>

				<div className="header-main__ikon">
					<p className="header-main__hors ikon-title">{timeHours}</p>
					<p>годин</p>
				</div>

				<div className="header-main__ikon">
					<p className="header-main__minut ikon-title">{timeMinutes}</p>
					<p>хвилин</p>
				</div>
			</div>
		</div>
	);
};

export default Time;
