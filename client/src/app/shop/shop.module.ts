import { SharedModule } from './../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [ShopComponent],
})
export class ShopModule {}
