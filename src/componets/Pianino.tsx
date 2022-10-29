import React from 'react';

type listType = {
	title: string;
	text1: string;
	text2: string;
	text3: string;
	text4: string;
};

const listDis: listType[] = [
	{
		title: 'Характеристики',
		text1: 'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб',
		text2: ' цінності Путіна не поширювалися далі, навіть',
		text3: 'за межі наших кордонів. Наша армія сильна і',
		text4: 'block 1',
	},
	{
		title: 'Рекомендація по догляду',
		text1: 'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб',
		text2: ' цінності Путіна не поширювалися далі, навіть',
		text3: 'за межі наших кордонів. Наша армія сильна і',
		text4: 'block 2',
	},
	{
		title: 'Гарантія та обмін',
		text1: 'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб',
		text2: ' цінності Путіна не поширювалися далі, навіть',
		text3: 'за межі наших кордонів. Наша армія сильна і',
		text4: 'block 3',
	},
];

const Pianino: React.FC = () => {
	const [openIkon, setOpenIkon] = React.useState<string>('Характеристики');
	const clickIcon = (obj: listType) => {
		setOpenIkon(obj.title);
	};
	return (
		<>
			{listDis.map((obj: listType, i: number) => (
				<div
					className={openIkon === obj.title ? 'goods-description__pianono-ikon activ' : 'goods-description__pianono-ikon'}
					onClick={() => clickIcon(obj)}
					key={i}>
					<div className="goods-description__pianino-title">
						<h5>{obj.title}</h5>
					</div>
					<div className="goods-description__pianino-text">
						<ul>
							<li>{obj.text1}</li>
							<li> {obj.text2}</li>
							<li>{obj.text3}</li>
							<li> {obj.text4}</li>
						</ul>
					</div>
				</div>
			))}
		</>
	);
};

export default Pianino;
