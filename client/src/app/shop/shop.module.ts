import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent],
  imports: [CommonModule, SharedModule, ShopRoutingModule],
})
export class ShopModule {}
