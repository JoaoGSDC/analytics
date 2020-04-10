import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { GraphicsComponent } from '../pages/graphics/graphics.component';


const routes: Routes = [{
  path: '', component: MainComponent
  // children: [{
  //   path: 'graphics', loadChildren: () => import('../pages/graphics/graphics.module').then(m => m.GraphicsModule)
  // }]
},
{
  path: 'graphics',
  component: GraphicsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
