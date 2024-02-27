export class Product {
  id!: number;
  name!: string;
  stock!: number;
  price!: number;
  photo!: string

  constructor(id: number, name: string, stock: number, photo: string) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.photo = photo;
  }

}
