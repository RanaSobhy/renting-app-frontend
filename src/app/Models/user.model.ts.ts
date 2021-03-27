export class User {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public country: string;
  public city: string;
  public mobile: string;
  public picture: string;
  public rating: number;

  constructor(
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    city: string,
    mobile: string,
    picture: string,
    rating: number = 0
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.city = city;
    this.mobile = mobile;
    this.picture = picture;
    this.rating = rating;
  }
}
