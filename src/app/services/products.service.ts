import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productlUrl = 'http://localhost:4500/productapi';
  constructor(private http: HttpClient) {}

  getAllapparelDataFromNodesercer() {
    return this.http.get<Item[]>(this.productlUrl);
  }

  getapparelDetailFromNodeserver(id: number) {
    return this.http.get<Item>(this.productlUrl + '/' + id);
  }
}
