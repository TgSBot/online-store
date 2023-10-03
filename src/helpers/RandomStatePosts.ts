export const randomGenderPost = (): string => {
	let rand = 0 + Math.random() * (1 + 1 - 0);
	return Math.floor(rand) === 0 ? 'female' : 'male';
};

export const randomSizeShoes = (): number => {
	let rand = 35 + Math.random() * (43 + 1 - 35);
	return Math.floor(rand);
};

export const randomRating = (): number => {
	let rand = 0 + Math.random() * (5 + 1 - 0);
	return Math.floor(rand);
};

export const randomProductAvailability = (): number => {
	let rand = 0 + Math.random() * (200 + 1 - 0);
	return Math.floor(rand);
};
