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

export const prepareBasketToOrder = (basketItems) => {
  const basketToOrder = [];

  basketItems.map((item) => (
    basketToOrder.push({
      product_id: item.id,
      count: item.count,
      price_per_product: item.price
    })
  ));

  return basketToOrder;
};