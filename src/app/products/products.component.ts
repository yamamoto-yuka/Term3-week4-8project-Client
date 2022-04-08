import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      product_id: 1,
      product_image1: '../../assets/Leather-Backpack-Brown.png',
      product_image2: '../../assets/Leather-Backpack-Gray.png',
      product_name: 'Leather Light Backpack',
      product_describe:
        'The leather is light and easy to use in daily life. It is a shape that fits any life.',
      product_price: 250.58,
      product_stock: 3,
    },
    {
      product_id: 2,
      product_image1: '../../assets/Leather-camerapouch-Brown.png',
      product_image2: '../../assets/Leather-camerapouch-Gray.png',
      product_name: 'Leather Compact Camera Pouch',
      product_describe:
        'Our pursuit is to create trend-setting designs with high-quality materials.',
      product_price: 120.34,
      product_stock: 0,
    },
    {
      product_id: 3,
      product_image1: '../../assets/Leather-Taughtbag-Brown.png',
      product_image2: '../../assets/Leather-Taughtbag-Gray.png',
      product_name: 'Leather Tote Bag',
      product_describe:
        'The cowhide leather used for the main body has a good tension and flexibility, and is scratch-resistant.',
      product_price: 210.1,
      product_stock: 5,
    },
  ];

  constructor() {}
  checkStock(stock: number) {
    if (0 < stock) return true;
    else return false;
  }
  ngOnInit(): void {}
}
