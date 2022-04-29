import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/apparel.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apparelUrl = 'http://localhost:4500/apparel';
  constructor(private http: HttpClient) {}

  getAllapparelDataFromNodesercer() {
    return this.http.get<Item[]>(this.apparelUrl);
  }

  getapparelDetailFromNodeserver(id: number) {
    return this.http.get<Item>(this.apparelUrl + '/' + id);
  }
}
