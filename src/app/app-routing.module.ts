import { CreateSetComponent } from './sets/set/create-set/create-set.component';
import { SetComponent } from './sets/set/set.component';
import { SetsComponent } from './sets/sets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'sets',
    component: SetsComponent
  },
  {
    path: 'set',
    component: SetComponent
  },
  {
    path: 'set/create',
    component: CreateSetComponent
  },
  {
    path: 'set/update/:id',
    component: SetsComponent,
    data: { edit: true }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
