import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphicsComponent } from './graphics.component';
import { BarsComponent } from './bars/bars.component';


@NgModule({
  declarations: [GraphicsComponent, BarsComponent],
  imports: [
    CommonModule,
    GraphicsRoutingModule
  ]
})
export class GraphicsModule { }
