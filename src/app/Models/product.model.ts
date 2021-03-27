export class Product {
  public _id: string;
  public ownerId: string;
  public name: string;
  public description: string;
  public price: string;
  public isRented: Boolean;
  public rentedBy: string;
  public condition: string;
  public brand: string;
  public categoryId: string;
  public photo: string;

  constructor(
    _id: string,
    ownerId: string,
    name: string,
    description: string,
    price: string,
    isRented: Boolean,
    rentedBy: string,
    condition: string,
    brand: string,
    categoryId: string,
    photo: string
  ) {
    this._id = _id;
    this.ownerId = ownerId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.isRented = isRented;
    this.rentedBy = rentedBy;
    this.condition = condition;
    this.brand = brand;
    this.categoryId = categoryId;
    this.photo = photo;
  }
}
