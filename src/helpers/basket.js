export const loadBasketState = () => {
  try {
    const serializedBasketState = localStorage.getItem('basket');

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

    localStorage.setItem('basket', serializedBasketState);
  } catch (e) {}
};