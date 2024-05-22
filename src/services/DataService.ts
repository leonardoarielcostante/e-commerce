import { Product } from "../model/Product"


export class DataService {
  private readonly PRODUCTS_URL = "https://fakestoreapi.com/products"
  private readonly CATEGORIES_URL ="https://fakestoreapi.com/products/categories"

  public async getProducts(category?: string): Promise<Product[]> {
    try {
      const url = category ? `${this.PRODUCTS_URL}/category/${category}` : this.PRODUCTS_URL
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`Error in fetch products: ${res.status}`)
      }

      const data: Product[] = await res.json()
      return data
    } catch (error) {
      console.error("Error in fetch products", error)
      throw error
    }
  }

  public async getCategories(): Promise<string>{
    try{
      const res = await fetch(this.CATEGORIES_URL)
      if(!res.ok){
        throw new Error(`Error in fetch categories: ${res.status}`)
      }
      const data: string = await res.json()
      return data
    } catch (error) {
      console.error("Error in fetch categories", error)
      throw error
    }
  }
}
