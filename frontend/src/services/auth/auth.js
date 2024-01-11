export const AUTH_KEY = 'vue_pizza_token';
export const getToken = () => localStorage.getItem(AUTH_KEY);
export const setToken = (token) => localStorage.setItem(AUTH_KEY, token);
export const removeToken = () => localStorage.removeItem(AUTH_KEY);
