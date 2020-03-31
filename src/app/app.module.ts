import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductColorListComponent } from './components/product-color-list/product-color-list.component';
import { ProductColorComponent } from './components/product-color/product-color.component'

import { MaterialImports} from './core/modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialImports,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent}
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductComponent,
    ProductColorListComponent,
    ProductColorComponent
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/