import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './componentes/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
     HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
