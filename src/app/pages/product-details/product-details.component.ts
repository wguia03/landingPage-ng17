import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  loading: boolean = true;
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      });
    });
  }
}
