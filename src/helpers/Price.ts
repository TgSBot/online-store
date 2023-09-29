import { useAppSelector } from './../hook/redux';

const Price = () => {
	const { allPosts } = useAppSelector((state) => state.allPosts);

	const arrayPrice = allPosts.map((element) => {
		let price = [];
		price.push(Number(element.price));
		return price;
	});

	const minPrice = Math.min(...arrayPrice.flat());
	const maxPrice = Math.max(...arrayPrice.flat());

	return [minPrice, maxPrice];
};

export default Price;
