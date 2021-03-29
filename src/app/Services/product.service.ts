import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.backendUrl}/api/products`);
  }

  create(data: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(
      `${environment.backendUrl}/api/products`,
      data
    );
  }

  rent(id: string, userId: string | undefined): Observable<Product> {
    return this.http.post<Product>(
      `${environment.backendUrl}/api/products/${id}/rent`,
      { rentedBy: userId, returnDate: Date.now() }
    );
  }

  return(id: string): Observable<Product> {
    return this.http.post<Product>(
      `${environment.backendUrl}/api/products/${id}/return`,
      null
    );
  }
}
