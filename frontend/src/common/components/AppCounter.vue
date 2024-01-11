<template>
	<div
		:class="`counter counter--orange ${
			className ? 'additional-list__counter' : 'ingredients__counter'
		}`"
	>
		<button
			type="button"
			class="counter__button counter__button--minus"
			:disabled="modelValue === min"
			@click="updateValue(modelValue - 1)"
		>
			<span class="visually-hidden">Меньше</span>
		</button>
		<input
			type="text"
			name="counter"
			class="counter__input"
			:value="modelValue ?? 0"
		/>
		<button
			type="button"
			:disabled="modelValue === max"
			:class="`counter__button counter__button--plus ${className}`"
			@click="updateValue(modelValue + 1)"
		>
			<span class="visually-hidden">Больше</span>
		</button>
	</div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue", "change"]);
defineProps({
	modelValue: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 3
	},
	min: {
		type: Number,
		default: 0
	},
	className: {
		type: String,
		default: ""
	}
});

const updateValue = (v) => {
	emit("change", v);
	emit("update:modelValue", v);
};
</script>

<style lang="scss">
@import "@/assets/scss/app";

.counter {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.counter__button {
	$el: &;
	$size_icon: 50%;
	position: relative;
	display: block;
	width: 16px;
	height: 16px;
	padding: 0;
	margin: 0;
	cursor: pointer;
	border: none;
	border-radius: 50%;
	outline: none;
	transition: 0.3s;
	&--minus {
		background-color: $purple-100;
		&::before {
			@include p_center-all;
			width: $size_icon;
			height: 2px;
			content: "";
			background-color: $black;
			border-radius: 2px;
		}
		&:hover:not(:active):not(:disabled) {
			background-color: $purple-200;
		}
		&:active:not(:disabled) {
			background-color: $purple-300;
		}
		&:focus:not(:disabled) {
			box-shadow: $shadow-regular;
		}
		&:disabled {
			cursor: default;
			&::before {
				opacity: 0.1;
			}
		}
	}

	&--plus {
		background-color: $green-500;
		&::before {
			@include p_center-all;
			width: $size_icon;
			height: 2px;
			content: "";
			background-color: $white;
			border-radius: 2px;
		}
		&::after {
			@include p_center-all;
			width: $size_icon;
			height: 2px;
			content: "";
			background-color: $white;
			border-radius: 2px;
			transform: translate(-50%, -50%) rotate(90deg);
		}
		&:hover:not(:active):not(:disabled) {
			background-color: $green-400;
		}
		&:active:not(:disabled) {
			background-color: $green-600;
		}
		&:focus:not(:disabled) {
			box-shadow: $shadow-regular;
		}
		&:disabled {
			cursor: default;
			opacity: 0.3;
		}
	}
	&--orange {
		background-color: $orange-200;
		&:hover:not(:active):not(:disabled) {
			background-color: $orange-100;
		}
		&:active:not(:disabled) {
			background-color: $orange-300;
		}
	}
}

.counter__input {
	@include r-s14-h16;
	box-sizing: border-box;
	width: 22px;
	padding: 0 3px;
	margin: 0;
	color: $black;
	text-align: center;
	background-color: transparent;
	border: none;
	border-radius: 10px;
	outline: none;
	&:focus {
		box-shadow: inset $shadow-regular;
	}
}
</style>
