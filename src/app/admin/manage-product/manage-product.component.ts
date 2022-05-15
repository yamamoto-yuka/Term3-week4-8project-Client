import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Item } from '../../interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  products: Item[] = [];
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  product_image1: string = '';
  product_image2: string = '';
  product_availability: any = '';
  showMessage = 'none';
  addproductStatus = false;
  errorMessage: any = '';
  display = false;


  constructor(private ps: ProductsService, private cs: CommonService, private activerouter:ActivatedRoute) { }

  availavility(data: any) {
    if (data > 0) return true;
    else return false;
  }

  addproduct() {
    this.cs.addNewProduct(this.product_name, this.product_desc, this.product_price, this.product_image1, this.product_image2, this.product_availability).subscribe((newproductDate) => {   
      console.log(newproductDate);
        this.showMessage = 'block';
        this.addproductStatus = newproductDate.insert;
        this.errorMessage = newproductDate.message;
        this.ngOnInit();
    })
  }

  //   toggledisplay(index: number) {
  //   this.cs.updateDisplay().subscribe((displayData) => {
  //     console.log(displayData);
  //   })
  // }
 
  ngOnInit(): void {
    this.ps.getAllproductDataFromNodesercer().subscribe((productsDate) => {
      this.products = productsDate;
      console.log(productsDate);

      for (let i = 0; i < productsDate.length; i++)
      {
        console.log(productsDate[i].display);
        if (productsDate[i].display === 1) {
          this.display = true;
        } else {
          this.display = false;
        }
        }
    })

  }

}
