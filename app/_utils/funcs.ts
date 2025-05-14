/* eslint-disable @typescript-eslint/no-explicit-any */
  
export  function addToCart(cart: any[], newItem: any): any[] {
    const index = cart.findIndex(
      (item) =>
        item.sku === newItem.sku &&
        item.color === newItem.color &&
        item.size === newItem.size
    );
  
    if (index !== -1) {
      // Product with same sku, color, and size found — update quantity
      const updatedCart = [...cart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: (updatedCart[index].quantity || 1) + 1,
      };
      return updatedCart;
    }
  
    // Not found — add new item with quantity 1
    return [...cart, { ...newItem, quantity: 1 }];
  }
  
 export function getEmptyValueKeys(obj: Record<string, any>): string[] {
    return Object.entries(obj)
      .filter(([_, value]) =>
        value === "" || value === null || value === undefined || (typeof value === "number" && isNaN(value))
      )
      .map(([key]) => key);
  }
  
