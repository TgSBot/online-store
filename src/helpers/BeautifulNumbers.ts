export const BeautifulNumbers = (num: number): string => {
	const arrayNumber = String(num).split('').reverse();
	const res: string[] = [];
	arrayNumber.forEach((element, index) => {
		index % 3 === 0 && index !== 0 ? res.push(' ', element) : res.push(element);
	});
	return res.reverse().join('');
};
