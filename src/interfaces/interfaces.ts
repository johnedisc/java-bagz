export interface BeanType {
  name: string, 
  origin: string, 
  roast: string, 
  price: number, 
  id: string, 
  quantityRemaining: number
}

export interface EditBeanType {
  id: string, 
  [x: string]: any
}
