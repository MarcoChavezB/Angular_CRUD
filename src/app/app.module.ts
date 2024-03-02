// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './Views/User/index/index.component';

@NgModule({
  declarations: [    
  ],
  imports: [
    AppComponent,
    IndexComponent,
    BrowserModule,
    HttpClientModule,
    // ... otros módulos
  ],
  bootstrap: [],
})
export class AppModule { }
