import firstPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_1.jpg';
import secondPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_2.jpg';
import thirdPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_3.jpg';
import fourthPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_4.png';
import fifthPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_5.png';
import sixthPhoto from '../img/jack-irwin-djIR42oN7Js-unsplash 1_6.png';

type Team = {
	id: number;
	img: any;
	title: string;
	position: string;
};

export const teamMember: Team[] = [
	{
		id: 1,
		img: firstPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
	{
		id: 2,
		img: secondPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
	{
		id: 3,
		img: thirdPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
	{
		id: 4,
		img: fourthPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
	{
		id: 5,
		img: fifthPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
	{
		id: 6,
		img: sixthPhoto,
		title: 'Даниил Солдатенко',
		position: 'Администратор',
	},
];
