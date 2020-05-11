import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from "@angular/material/slider";

const modules = [
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
