import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../interfaces/signup';
import { Login } from '../interfaces/login';
import { Newproduct } from '../interfaces/newproduct';
import { Update } from '../interfaces/update';
import { Deletedata } from '../interfaces/deletedata';
import { Updatedisplay } from '../interfaces/updatedisplay';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private signupURL = 'http://localhost:4500/signup';
  private loginURL = 'http://localhost:4500/login';
  private productURL = 'http://localhost:4500/product';
  private toggleURL = 'http://localhost:4500/toggle';

  
  constructor(private http: HttpClient) { }

  getAllproduct() {
    return this.http.get<Product[]>(this.productURL);
  }

  getproductByID(id: number) {
    return this.http.get<Product>(this.productURL+ '/' + id);
  }

  signupService(user_name: string, password: string) {
    let signupbody = {
      user_name: user_name,
      password: password
    }
    return this.http.post<Signup>(this.signupURL, signupbody);
  }

  loginService(user_name: string, password: string) {
    let loginbody = {
      user_name: user_name,
      password: password
    }
    return this.http.post<Login>(this.loginURL, loginbody);
  } 

  addNewProduct(product_name: string, product_desc: string, product_price: number, product_image1: string, product_image2: string, product_availability:number) {
    let newproductbody = {
      product_name: product_name,
      product_desc: product_desc,
      product_price : product_price,
      product_image1: product_image1,
      product_image2: product_image2,
      product_availability: product_availability
    }
    return this.http.post<Newproduct>(this.productURL, newproductbody);
  }

  updateProduct(ProductID: number, product_name: string, product_desc: string, product_price: number, product_image1: string, product_image2: string, product_availability: any, display:any) {
    let updatebody = {
      ProductID: ProductID,
      product_name:product_name,
      product_desc:product_desc,
      product_price:product_price,
      product_image1:product_image1,
      product_image2:product_image2,
      product_availability: product_availability,
      display: display
    }
    return this.http.put<Update>(this.productURL, updatebody);
  }

  updateDisplay(ProductID: number) {
    let updatedisplaybody = {
      ProductID: ProductID,
    }
    return this.http.put<Updatedisplay>(this.toggleURL, updatedisplaybody)
  }

  deleteProduct(id: number) {
    return this.http.delete<Deletedata>(this.productURL+ '/' +id)
  }

}
