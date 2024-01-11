import { API_URL } from "@/common/constants";

export const getPizzaPrice = (params) => {
	const ingredientsTotalPrice = params.ingredients
		.filter((product) => product.name)
		.reduce((sum, ingredient) => sum + ingredient.price * ingredient.quantity, 0);

	const multiplier = params.size.multiplier;

	return multiplier * (params.sauce.price + params.dough.price + ingredientsTotalPrice);
};

export const miscsHandler = (miscs) => {
	return miscs.map((misc) => ({ ...misc, quantity: 0 }));
};

export const getImageSrc = (image) => {
	return new URL(`../../assets/img/${image}`, import.meta.url).href;
};

export const getPublicImage = (path) => {
	return `${API_URL}/${path}`;
};
