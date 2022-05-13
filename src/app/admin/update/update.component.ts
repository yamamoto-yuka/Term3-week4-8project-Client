import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  product_image1: string = '';
  product_image2: string = '';
  product_availability: any = '';
  display: string = '';
  updateStatus = false;
  showMessage = 'none';
  errorMessage: any = '';


 constructor(private param: ActivatedRoute, private cs: CommonService, private router:Router) { }
  

  

  
  update() {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.updateProduct(id, this.product_name, this.product_desc, this.product_price, this.product_image1, this.product_image2, this.product_availability, this.display).subscribe((updateConfirmation) => {
      console.log(updateConfirmation);
      this.updateStatus = updateConfirmation.update;
      this.showMessage = 'block';
      this.errorMessage = updateConfirmation.message;
    })
    
 }
  
  delete() {
    if (confirm('Are you sure?')) {
      let id: any = this.param.snapshot.paramMap.get('id');
      this.cs.deleteProduct(id).subscribe((response) => {
        console.log(response);
        if (response.delete) {
          this.router.navigate(['/admin']);
        }
      })
    }
  }
  
  ngOnInit(): void {
    console.log(this.param.snapshot.paramMap.get('id'));
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getProductId(id).subscribe((productDetail) => {
      console.log(productDetail);
      this.product_name = productDetail.productData[0].product_name;
      this.product_desc = productDetail.productData[0].product_desc;
      this.product_price = productDetail.productData[0].product_price;
      this.product_image1 = productDetail.productData[0].product_image1;
      this.product_image2 = productDetail.productData[0].product_image2;
      this.product_availability = productDetail.productData[0].product_availability;

      console.log(productDetail.productData[0].display);
      if (productDetail.productData[0].display === 1) {
        productDetail.productData[0].display = true;
      } else {
        productDetail.productData[0].display = false;
      }
      console.log(productDetail.productData[0].display);
      this.display = productDetail.productData[0].display;
    })
  }

}
