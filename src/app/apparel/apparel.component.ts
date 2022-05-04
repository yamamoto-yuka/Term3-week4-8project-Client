import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/product.interface';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.scss'],
})
export class ApparelComponent implements OnInit {
  items: Item[] = [];
  constructor(private service: ProductsService) {}

  changeboolean(data: any) {
    if (data === 0) return true;
    else return false;
  }

  ngOnInit(): void {
    this.service.getAllapparelDataFromNodesercer().subscribe((apparelData) => {
      this.items = apparelData;
    });
  }
}
