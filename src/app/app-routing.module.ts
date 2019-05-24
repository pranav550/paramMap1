import { ProductMarksComponent } from './product-marks/product-marks.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo : '/studentList', pathMatch : 'full'},  
  {path: 'studentList', component : ProductListComponent},  
  {path: 'studentDetail/:id/:name', component : ProductDetailComponent},  
  {path: 'studentMarks', component : ProductMarksComponent},  
  {path: 'addStudent', component : ProductComponent},  
  {path: "**", component : NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
