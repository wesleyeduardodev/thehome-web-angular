import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NavComponent} from "./components/nav/nav.component";
import {ClientListComponent} from "./components/client/client-list/client-list.component";
import {ClientCreateComponent} from "./components/client/client-create/client-create.component";
import {ClientUpdateComponent} from "./components/client/client-update/client-update.component";
import {ClientDeleteComponent} from "./components/client/client-delete/cliente-delete.component";

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'clients', component: ClientListComponent},
      {path: 'clients/create', component: ClientCreateComponent},
      {path: 'clients/update/:id', component: ClientUpdateComponent},
      { path: 'clients/delete/:id', component: ClientDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
