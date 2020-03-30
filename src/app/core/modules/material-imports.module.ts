import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
imports: [
  //CommonModule,
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule ],

exports:[ 
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule
  ]
})

export class MaterialImports {}