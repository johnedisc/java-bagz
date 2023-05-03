export interface BeanType {
  name: string, 
  origin: string, 
  roast: string, 
  price: number, 
  quantityRemaining: number,
  id?: string 
}

export interface EditBeanType {
  id: string, 
  [x: string]: any
}
