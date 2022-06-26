import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetsComponent } from './sets/sets.component';
import { SetComponent } from './sets/set/set.component';
import { CreateSetComponent } from './sets/set/create-set/create-set.component';
import { UpdateSetComponent } from './sets/set/update-set/update-set.component';
import { SetFormComponent } from './sets/set/set-form/set-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsComponent,
    SetComponent,
    CreateSetComponent,
    UpdateSetComponent,
    SetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
