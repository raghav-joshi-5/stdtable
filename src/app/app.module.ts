import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StdformComponent } from './shared/component/stdform/stdform.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { StddashComponent } from './shared/component/stddash/stddash.component';

@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    StddashComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
