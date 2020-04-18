import { Length, IsInt } from 'class-validator'

export default class Product {
  @Length(2, 20)
  title: string;
  @IsInt()
  price: number;
  
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p
  }
}