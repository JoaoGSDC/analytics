import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';


const routes: Routes = [
  {
  // path: '', loadChildren: () => import('../app/main/main.module').then(m => m.MainModule)
  path: '',
  component: MainComponent,
  children: [{
    path: '',
    component: GraphicsComponent
  },
  {
    path: 'graphics',
    component: GraphicsComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
