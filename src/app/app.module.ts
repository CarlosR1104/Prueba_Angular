import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { FormCrudUpdateComponent } from './crud/form-crud.update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormCrudComponent } from './crud/form-crud.component';

const routes:Routes=[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'',component:CrudComponent},
  {path:'form/update/:id',component:FormCrudUpdateComponent},
  {path:'form/register',component:FormCrudComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    FormCrudComponent,
    FormCrudUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
