export interface Getproductid {
  productid: boolean;
  message: string;
  productData: [
    {
      ProductID: number;
      product_name: string;
      product_desc: string;
      product_price: number;
      product_availability: number;
      product_image1: string;
      product_image2: string;
      display: any;
    }
  ]
}
