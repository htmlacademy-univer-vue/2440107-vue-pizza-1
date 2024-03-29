/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	"/addresses": {
		get: operations["AddressController.find"];
		post: operations["AddressController.create"];
	};
	"/addresses/{id}": {
		put: operations["AddressController.replaceById"];
		delete: operations["AddressController.deleteById"];
	};
	"/dough": {
		get: operations["DoughController.find"];
	};
	"/ingredients": {
		get: operations["IngredientController.find"];
	};
	"/login": {
		post: operations["UserController.login"];
	};
	"/logout": {
		delete: operations["UserController.logout"];
	};
	"/misc": {
		get: operations["MiscController.find"];
	};
	"/orders": {
		get: operations["OrderController.find"];
		post: operations["OrderController.create"];
	};
	"/orders/{id}": {
		delete: operations["OrderController.deleteById"];
	};
	"/sauces": {
		get: operations["SauceController.find"];
	};
	"/sizes": {
		get: operations["SizeController.find"];
	};
	"/whoAmI": {
		get: operations["UserController.whoAmI"];
	};
}

export type webhooks = Record<string, never>;

export interface components {
	schemas: {
		/** Address */
		Address: {
			building: string;
			comment?: string;
			flat?: string;
			id?: number;
			name: string;
			street: string;
			userId?: string;
		};
		/**
		 * AddressPartial
		 * @description (tsType: Partial<Address>, schemaOptions: { partial: true })
		 */
		AddressPartial: {
			building?: string;
			comment?: string;
			flat?: string;
			id?: number;
			name?: string;
			street?: string;
			userId?: string;
		};
		/**
		 * AddressWithRelations
		 * @description (tsType: AddressWithRelations, schemaOptions: { includeRelations: true })
		 */
		AddressWithRelations: {
			building: string;
			comment?: string;
			flat?: string;
			id?: number;
			name: string;
			orders?: components["schemas"]["OrderWithRelations"][];
			street: string;
			user?: components["schemas"]["UserWithRelations"];
			userId?: string;
		};
		/** Dough */
		Dough: {
			description: string;
			id?: number;
			image: string;
			name: string;
			price: number;
		};
		/**
		 * DoughWithRelations
		 * @description (tsType: DoughWithRelations, schemaOptions: { includeRelations: true })
		 */
		DoughWithRelations: {
			description: string;
			id?: number;
			image: string;
			name: string;
			pizzas?: components["schemas"]["PizzaWithRelations"][];
			price: number;
		};
		/** Ingredient */
		Ingredient: {
			id?: number;
			image: string;
			name: string;
			price: number;
		};
		/**
		 * IngredientWithRelations
		 * @description (tsType: IngredientWithRelations, schemaOptions: { includeRelations: true })
		 */
		IngredientWithRelations: {
			id?: number;
			image: string;
			name: string;
			price: number;
		};
		/** Misc */
		Misc: {
			id?: number;
			image: string;
			name: string;
			price: number;
		};
		/** MiscOrder */
		MiscOrder: {
			id?: number;
			miscId?: number;
			orderId?: number;
			quantity: number;
		};
		/**
		 * MiscOrderPartial
		 * @description (tsType: Partial<MiscOrder>, schemaOptions: { partial: true })
		 */
		MiscOrderPartial: {
			id?: number;
			miscId?: number;
			orderId?: number;
			quantity?: number;
		};
		/**
		 * MiscOrderWithRelations
		 * @description (tsType: MiscOrderWithRelations, schemaOptions: { includeRelations: true })
		 */
		MiscOrderWithRelations: {
			id?: number;
			misc?: components["schemas"]["MiscWithRelations"];
			miscId?: number;
			order?: components["schemas"]["OrderWithRelations"];
			orderId?: number;
			quantity: number;
		};
		/**
		 * MiscWithRelations
		 * @description (tsType: MiscWithRelations, schemaOptions: { includeRelations: true })
		 */
		MiscWithRelations: {
			id?: number;
			image: string;
			name: string;
			orderMisc?: components["schemas"]["MiscOrderWithRelations"][];
			price: number;
		};
		/**
		 * NewAddressInUser
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Address, 'id'>, 'userId'>, schemaOptions: { title: 'NewAddressInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
		 */
		NewAddressInUser: {
			building: string;
			comment?: string;
			flat?: string;
			name: string;
			street: string;
			userId?: string;
		};
		/**
		 * NewMiscOrder
		 * @description (tsType: Omit<MiscOrder, 'id'>, schemaOptions: { title: 'NewMiscOrder', exclude: [ 'id' ] })
		 */
		NewMiscOrder: {
			miscId?: number;
			orderId?: number;
			quantity: number;
		};
		/**
		 * NewMiscOrderInMisc
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<MiscOrder, 'id'>, 'miscId'>, schemaOptions: { title: 'NewMiscOrderInMisc', exclude: [ 'id' ], optional: [ 'miscId' ] })
		 */
		NewMiscOrderInMisc: {
			miscId?: number;
			orderId?: number;
			quantity: number;
		};
		/**
		 * NewMiscOrderInOrder
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<MiscOrder, 'id'>, 'orderId'>, schemaOptions: { title: 'NewMiscOrderInOrder', exclude: [ 'id' ], optional: [ 'orderId' ] })
		 */
		NewMiscOrderInOrder: {
			miscId?: number;
			orderId?: number;
			quantity: number;
		};
		/**
		 * NewOrderInAddress
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Order, 'id'>, 'addressId'>, schemaOptions: { title: 'NewOrderInAddress', exclude: [ 'id' ], optional: [ 'addressId' ] })
		 */
		NewOrderInAddress: {
			address?: unknown;
			addressId?: number;
			misc?: Record<string, never>[];
			phone?: string;
			pizzas?: Record<string, never>[];
			userId?: string;
		};
		/**
		 * NewOrderInUser
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Order, 'id'>, 'userId'>, schemaOptions: { title: 'NewOrderInUser', exclude: [ 'id' ], optional: [ 'userId' ] })
		 */
		NewOrderInUser: {
			address?: unknown;
			addressId?: number;
			misc?: Record<string, never>[];
			phone?: string;
			pizzas?: Record<string, never>[];
			userId?: string;
		};
		/**
		 * NewPizza
		 * @description (tsType: Omit<Pizza, 'id'>, schemaOptions: { title: 'NewPizza', exclude: [ 'id' ] })
		 */
		NewPizza: {
			doughId?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * NewPizzaInDough
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Pizza, 'id'>, 'doughId'>, schemaOptions: { title: 'NewPizzaInDough', exclude: [ 'id' ], optional: [ 'doughId' ] })
		 */
		NewPizzaInDough: {
			doughId?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * NewPizzaIngredient
		 * @description (tsType: Omit<PizzaIngredient, 'id'>, schemaOptions: { title: 'NewPizzaIngredient', exclude: [ 'id' ] })
		 */
		NewPizzaIngredient: {
			ingredientId?: number;
			pizzaId?: number;
			quantity: number;
		};
		/**
		 * NewPizzaInOrder
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Pizza, 'id'>, 'orderId'>, schemaOptions: { title: 'NewPizzaInOrder', exclude: [ 'id' ], optional: [ 'orderId' ] })
		 */
		NewPizzaInOrder: {
			doughId?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * NewPizzaInSauce
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Pizza, 'id'>, 'sauceId'>, schemaOptions: { title: 'NewPizzaInSauce', exclude: [ 'id' ], optional: [ 'sauceId' ] })
		 */
		NewPizzaInSauce: {
			doughId?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * NewPizzaInSize
		 * @description (tsType: @loopback/repository-json-schema#Optional<Omit<Pizza, 'id'>, 'sizeId'>, schemaOptions: { title: 'NewPizzaInSize', exclude: [ 'id' ], optional: [ 'sizeId' ] })
		 */
		NewPizzaInSize: {
			doughId?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * NewUser
		 * @description (tsType: NewUserRequest, schemaOptions: { title: 'NewUser' })
		 */
		NewUser: {
			avatar?: string;
			email: string;
			id?: string;
			name: string;
			password: string;
			phone: string;
		};
		/** NewUserRequest */
		NewUserRequest: {
			avatar?: string;
			email: string;
			id?: string;
			name: string;
			password: string;
			phone: string;
		};
		/** Order */
		Order: {
			address?: unknown;
			addressId?: number;
			id?: number;
			misc?: Record<string, never>[];
			phone?: string;
			pizzas?: Record<string, never>[];
			userId?: string;
		};
		/**
		 * OrderPartial
		 * @description (tsType: Partial<Order>, schemaOptions: { partial: true })
		 */
		OrderPartial: {
			address?: unknown;
			addressId?: number;
			id?: number;
			misc?: Record<string, never>[];
			phone?: string;
			pizzas?: Record<string, never>[];
			userId?: string;
		};
		/**
		 * OrderWithRelations
		 * @description (tsType: OrderWithRelations, schemaOptions: { includeRelations: true })
		 */
		OrderWithRelations: {
			address?: unknown;
			addressId?: number;
			id?: number;
			misc?: Record<string, never>[];
			orderAddress?: components["schemas"]["AddressWithRelations"];
			orderMisc?: components["schemas"]["MiscOrderWithRelations"][];
			orderPizzas?: components["schemas"]["PizzaWithRelations"][];
			phone?: string;
			pizzas?: Record<string, never>[];
			user?: components["schemas"]["UserWithRelations"];
			userId?: string;
		};
		/** Pizza */
		Pizza: {
			doughId?: number;
			id?: number;
			name: string;
			orderId?: number;
			quantity: number;
			sauceId?: number;
			sizeId?: number;
		};
		/** PizzaIngredient */
		PizzaIngredient: {
			id?: number;
			ingredientId?: number;
			pizzaId?: number;
			quantity: number;
		};
		/**
		 * PizzaIngredientPartial
		 * @description (tsType: Partial<PizzaIngredient>, schemaOptions: { partial: true })
		 */
		PizzaIngredientPartial: {
			id?: number;
			ingredientId?: number;
			pizzaId?: number;
			quantity?: number;
		};
		/**
		 * PizzaIngredientWithRelations
		 * @description (tsType: PizzaIngredientWithRelations, schemaOptions: { includeRelations: true })
		 */
		PizzaIngredientWithRelations: {
			id?: number;
			ingredient?: components["schemas"]["IngredientWithRelations"];
			ingredientId?: number;
			pizza?: components["schemas"]["PizzaWithRelations"];
			pizzaId?: number;
			quantity: number;
		};
		/**
		 * PizzaPartial
		 * @description (tsType: Partial<Pizza>, schemaOptions: { partial: true })
		 */
		PizzaPartial: {
			doughId?: number;
			id?: number;
			name?: string;
			orderId?: number;
			quantity?: number;
			sauceId?: number;
			sizeId?: number;
		};
		/**
		 * PizzaWithRelations
		 * @description (tsType: PizzaWithRelations, schemaOptions: { includeRelations: true })
		 */
		PizzaWithRelations: {
			dough?: components["schemas"]["DoughWithRelations"];
			doughId?: number;
			id?: number;
			ingredients?: components["schemas"]["PizzaIngredientWithRelations"][];
			name: string;
			order?: components["schemas"]["OrderWithRelations"];
			orderId?: number;
			quantity: number;
			sauce?: components["schemas"]["SauceWithRelations"];
			sauceId?: number;
			size?: components["schemas"]["SizeWithRelations"];
			sizeId?: number;
		};
		/** Sauce */
		Sauce: {
			id?: number;
			name: string;
			price: number;
		};
		/**
		 * SauceWithRelations
		 * @description (tsType: SauceWithRelations, schemaOptions: { includeRelations: true })
		 */
		SauceWithRelations: {
			id?: number;
			name: string;
			pizzas?: components["schemas"]["PizzaWithRelations"][];
			price: number;
		};
		/** Size */
		Size: {
			id?: number;
			image: string;
			multiplier: number;
			name: string;
		};
		/**
		 * SizeWithRelations
		 * @description (tsType: SizeWithRelations, schemaOptions: { includeRelations: true })
		 */
		SizeWithRelations: {
			id?: number;
			image: string;
			multiplier: number;
			name: string;
			pizzas?: components["schemas"]["PizzaWithRelations"][];
		};
		/** User */
		User: {
			avatar?: string;
			email: string;
			id?: string;
			name: string;
			phone: string;
		};
		/**
		 * UserCredentialsWithRelations
		 * @description (tsType: UserCredentialsWithRelations, schemaOptions: { includeRelations: true })
		 */
		UserCredentialsWithRelations: {
			id?: string;
			password: string;
			userId: string;
		};
		/**
		 * UserWithRelations
		 * @description (tsType: UserWithRelations, schemaOptions: { includeRelations: true })
		 */
		UserWithRelations: {
			addresses?: components["schemas"]["AddressWithRelations"][];
			avatar?: string;
			email: string;
			id?: string;
			name: string;
			orders?: components["schemas"]["OrderWithRelations"][];
			phone: string;
			userCredentials?: components["schemas"]["UserCredentialsWithRelations"];
		};
	};
	responses: never;
	parameters: never;
	requestBodies: never;
	headers: never;
	pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
	"AddressController.find": {
		responses: {
			/** @description Array of Address model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Address"][];
				};
			};
		};
	};
	"AddressController.create": {
		requestBody?: {
			content: {
				"application/json": unknown;
			};
		};
		responses: {
			/** @description Address model instance */
			200: {
				content: {
					"application/json": components["schemas"]["Address"];
				};
			};
		};
	};
	"AddressController.replaceById": {
		parameters: {
			path: {
				id: number;
			};
		};
		requestBody?: {
			content: {
				"application/json": unknown;
			};
		};
		responses: {
			/** @description No Content */
			204: {
				content: {
					"application/json": unknown;
				};
			};
		};
	};
	"AddressController.deleteById": {
		parameters: {
			path: {
				id: number;
			};
		};
		responses: {
			/** @description No Content */
			204: {
				content: {
					"application/json": unknown;
				};
			};
		};
	};
	"DoughController.find": {
		responses: {
			/** @description Array of Dough model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Dough"][];
				};
			};
		};
	};
	"IngredientController.find": {
		responses: {
			/** @description Array of Ingredient model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Ingredient"][];
				};
			};
		};
	};
	"UserController.login": {
		/** @description The input of login function */
		requestBody: {
			content: {
				"application/json": {
					/** Format: email */
					email: string;
					password: string;
				};
			};
		};
		responses: {
			/** @description Token */
			200: {
				content: {
					"application/json": {
						token?: string;
					};
				};
			};
		};
	};
	"UserController.logout": {
		responses: {
			/** @description Return value of UserController.logout */
			200: {
				content: never;
			};
		};
	};
	"MiscController.find": {
		responses: {
			/** @description Array of Misc model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Misc"][];
				};
			};
		};
	};
	"OrderController.find": {
		responses: {
			/** @description Array of Order model instances */
			200: {
				content: {
					"application/json": unknown[];
				};
			};
		};
	};
	"OrderController.create": {
		requestBody?: {
			content: {
				"application/json": unknown;
			};
		};
		responses: {
			/** @description Order model instance */
			201: {
				content: {
					"application/json": unknown;
				};
			};
		};
	};
	"OrderController.deleteById": {
		parameters: {
			path: {
				id: number;
			};
		};
		responses: {
			/** @description No Content */
			204: {
				content: {
					"application/json": unknown;
				};
			};
		};
	};
	"SauceController.find": {
		responses: {
			/** @description Array of Sauce model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Sauce"][];
				};
			};
		};
	};
	"SizeController.find": {
		responses: {
			/** @description Array of Size model instances */
			200: {
				content: {
					"application/json": components["schemas"]["Size"][];
				};
			};
		};
	};
	"UserController.whoAmI": {
		responses: {
			/** @description Authorized user object */
			200: {
				content: {
					"application/json": components["schemas"]["User"];
				};
			};
		};
	};
}
