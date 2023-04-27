export class Product{

  imageUrl: string;
  name: string;
  description: string;
  price: number;
  amount: number;

  constructor(cImageUrl:string, cName: string, cDescription:string, cPrice: number ){
    this.imageUrl = cImageUrl;
    this.name = cName;
    this.description = cDescription;
    this.price = cPrice;
    this.amount = 0;
  }
}
