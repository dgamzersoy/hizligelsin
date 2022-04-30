import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ButtonComponent } from './components/basicComponents/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent } from './components/basicComponents/text-box/text-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectBoxComponent } from './components/basicComponents/select-box/select-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,

    LoginComponent,
     ProductDetailsComponent,
     ProductAddComponent,
     ButtonComponent,
     TextBoxComponent,
     SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
