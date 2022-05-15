import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../interfaces/signup';
import { Login } from '../interfaces/login';
import { Newproduct } from '../interfaces/newproduct';
import { Getproductid } from '../interfaces/getproductid';
import { Update } from '../interfaces/update';
import { Deletedata } from '../interfaces/deletedata';
import { Updatedisplay } from '../interfaces/updatedisplay';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private signupURL = 'http://localhost:4500/signupapi'
  private loginURL = 'http://localhost:4500/login'
  private addproductURL = 'http://localhost:4500/addnewproduct'
  private productURL = 'http://localhost:4500/product'
  private updateURL = 'http://localhost:4500/update'
  private updatedisplayURL = 'http://localhost:4500/toggledisplay'
  private deleteURL = 'http://localhost:4500/deleteproduct'
  
  constructor(private http: HttpClient) { }

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
    let addnewproductBody = {
      product_name: product_name,
      product_desc: product_desc,
      product_price : product_price,
      product_image1: product_image1,
      product_image2: product_image2,
      product_availability: product_availability
    }
    return this.http.post<Newproduct>(this.addproductURL, addnewproductBody);
  }

  getProductId(id: any) {
    return this.http.get<Getproductid>(this.productURL + "/"+ id)
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
    return this.http.put<Update>(this.updateURL, updatebody);
  }

  updateDisplay(ProductID: number) {
    let updatedisplaybody = {
      ProductID: ProductID,
    }
    return this.http.put<Updatedisplay>(this.updatedisplayURL, updatedisplaybody)
  }

  deleteProduct(id: number) {
    return this.http.delete<Deletedata>(this.deleteURL+ '/' +id)
  }

}
