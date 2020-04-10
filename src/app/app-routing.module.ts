import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';


const routes: Routes = [
  {
  path: '',
  component: MainComponent,
  children: [
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
