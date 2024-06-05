import { CartItem } from "../model/CartItem"

export class CartService {
  public static getCartItems(): CartItem[] {
    const cartItems = localStorage.getItem('cartItems')
    return cartItems ? JSON.parse(cartItems) : []
  }

  public static addItemsToLocal(cartItems: CartItem[]) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }
}
