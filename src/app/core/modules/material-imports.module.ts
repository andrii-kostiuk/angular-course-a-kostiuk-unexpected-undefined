import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
imports: [
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatGridListModule,
  ],

exports:[ 
  MatListModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  BrowserAnimationsModule,
  MatGridListModule,
  ]
})

export class MaterialImports {}