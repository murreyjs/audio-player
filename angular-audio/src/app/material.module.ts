import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatButtonModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
