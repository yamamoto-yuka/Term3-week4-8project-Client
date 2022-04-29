import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../interfaces/apparel.interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'appareldetails',
  templateUrl: './appareldetails.component.html',
  styleUrls: ['./appareldetails.component.scss'],
})
export class AppareldetailsComponent implements OnInit {
  item: Item;
  constructor(
    private param: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit(): void {
    // console.log(this.param.snapshot.paramMap.get('id'));
    let id: any = this.param.snapshot.paramMap.get('id');
    this.service.getapparelDetailFromNodeserver(id).subscribe((apparelData) => {
      this.item = apparelData;
    });
  }
}
