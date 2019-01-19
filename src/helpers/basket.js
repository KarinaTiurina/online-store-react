import { BasketStorage } from '~/constants/localStorage';

export const loadBasketState = () => {
  try {
    const serializedBasketState = localStorage.getItem(BasketStorage);

    if (serializedBasketState == null)
      return [];

    return JSON.parse(serializedBasketState);
  } catch (e) {
    return [];
  }
};

export const saveBasketState = (basketState) => {
  try {
    const serializedBasketState = JSON.stringify(basketState);

    localStorage.setItem(BasketStorage, serializedBasketState);
  } catch (e) {}
};

export const clearBasketState = () => {
  try {
    localStorage.removeItem(BasketStorage);
  } catch (e) {}
};