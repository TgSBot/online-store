import sneakers from '../img/image.jpg';

type Post = {
	id: number;
	img: File;
	title: string;
	price: number;
	size: number;
	rating: number;
};

export const post: Post[] = [
	{
		id: 1,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 11000,
		size: 36,
		rating: 5,
	},
	{
		id: 2,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 12000,
		size: 37,
		rating: 4,
	},
	{
		id: 3,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 13000,
		size: 38,
		rating: 3.5,
	},
	{
		id: 4,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 10500,
		size: 36,
		rating: 4,
	},
	{
		id: 5,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 9000,
		size: 36,
		rating: 5,
	},
	{
		id: 6,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 8000,
		size: 34,
		rating: 3,
	},
	{
		id: 7,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 10000,
		size: 33,
		rating: 5,
	},
	{
		id: 8,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 6000,
		size: 36,
		rating: 2,
	},
	{
		id: 9,
		img: sneakers,
		title: 'Кроссовки Nike Air Force 1 07 QS',
		price: 18000,
		size: 39,
		rating: 5,
	},
];

const arrayPrice = post.map((element) => {
	let price = [];
	price.push(element.price);
	return price;
});

export const minPrice = Math.min(...arrayPrice.flat());
export const maxPrice = Math.max(...arrayPrice.flat());
