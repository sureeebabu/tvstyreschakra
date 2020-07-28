import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule { }
