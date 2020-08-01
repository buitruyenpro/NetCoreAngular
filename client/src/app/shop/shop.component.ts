import { IType } from './../shared/models/productType';
import { IBrand } from './../shared/models/brand';
import { ShopService } from './shop.service';
import { IProduct } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  brandIdSelected: number;
  typeIdSelected: number;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopService
      .getProducts(this.brandIdSelected, this.typeIdSelected)
      .subscribe(
        (respone) => {
          this.products = respone.data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getBrands() {
    this.shopService.getBrands().subscribe(
      (respone) => {
        this.brands = [{ id: 0, name: 'All' }, ...respone];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getTypes() {
    this.shopService.getTypes().subscribe(
      (respone) => {
        this.types = [{ id: 0, name: 'All' }, ...respone];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }
}
