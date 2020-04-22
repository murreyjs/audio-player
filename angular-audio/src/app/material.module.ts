import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';

const modules = [
  MatButtonModule,
  MatSelectModule,
  MatListModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
