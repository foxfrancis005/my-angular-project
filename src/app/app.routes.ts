import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';
import { InputInViewComponent } from './input-in-view/input-in-view.component';
import { EvtCustomComponent } from './evt-custom/evt-custom.component';
import { SwitchDirComponent } from './switch-dir/switch-dir.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { PeliCompComponent } from './peli-comp/peli-comp.component';
import { InjectComponent } from './inject/inject.component';
import { FormsComponent } from './forms/forms.component';
import { Forms2Component } from './forms2/forms2.component';

const routes:Routes=[
{ path: 'event-binding', component: HelloWorldComponent },
{ path: 'directiva-estructural', component: UserListComponent },
{ path: 'property-binding', component: InputInViewComponent },
{ path: 'evt-binding-custom', component: EvtCustomComponent },
{ path: 'ng-switch', component: SwitchDirComponent },
{ path: 'directivas-atributo', component: AttrDirComponent },
{ path: 'servicios', component: PeliCompComponent },
{ path: 'dependency-injection', component: InjectComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'temp-driv-form', component: Forms2Component }
];

export const routing = RouterModule.forRoot(routes);