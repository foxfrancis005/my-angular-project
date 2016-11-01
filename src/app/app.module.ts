import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { InputInViewComponent } from './input-in-view/input-in-view.component';
import { EvtCustomComponent } from './evt-custom/evt-custom.component';
import { SwitchDirComponent } from './switch-dir/switch-dir.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { PeliCompComponent } from './peli-comp/peli-comp.component';
import {PeliculasService} from './peliculas.service';
import { InjectComponent } from './inject/inject.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    InputInViewComponent,
    EvtCustomComponent,
    SwitchDirComponent,
    AttrDirComponent,
    PeliCompComponent,
    InjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PeliculasService]
  bootstrap: [AppComponent]
})
export class AppModule { }
