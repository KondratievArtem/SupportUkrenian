import React from 'react';

type questionType = {
	title: string;
	paragraf: string;
};

const listQuestion: questionType[] = [
	{
		title: 'Часто задавані питання №1',
		paragraf:
			'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо оснащені',
	},
	{
		title: 'Часто задавані питання №2',
		paragraf:
			'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо оснащені',
	},
	{
		title: 'Часто задавані питання №3',
		paragraf:
			'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо оснащені',
	},
	{
		title: 'Часто задавані питання №4',
		paragraf:
			'Ми тут захищаємо цінності, які ми поділяємо в Європі та світі. Ми робимо все можливе, щоб цінності Путіна не поширювалися далі, навіть за межі наших кордонів. Наша армія сильна і рішуча, але вони недостатньо оснащені',
	},
];

const QuestionHome: React.FC = () => {
	const [open, setOpen] = React.useState<{
		title: string;
	}>({ title: 'Часто задавані питання №1' });

	const openQuestion = (obj: questionType) => {
		setOpen(obj);
	};

	return (
		<ul>
			{listQuestion.map((obj: questionType, i: number) => (
				<li key={i} className={open.title === obj.title ? 'question__ikon activ' : 'question__ikon'}>
					<div className="question__ikon-title" onClick={() => openQuestion(obj)}>
						<h3>{obj.title}</h3>
						<div className="question__decor"></div>
					</div>
					<div className="question__ikon-content">
						<p>{obj.paragraf}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
export default QuestionHome;
