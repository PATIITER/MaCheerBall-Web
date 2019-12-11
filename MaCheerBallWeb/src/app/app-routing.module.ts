import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vote-list',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'vote-list',
    loadChildren: () => import('./vote-list/vote-list.module').then( m => m.VoteListPageModule)
  },
  {
    path: 'vote-check',
    loadChildren: () => import('./vote-check/vote-check.module').then( m => m.VoteCheckPageModule)
  },
  {
    path: 'vote-add',
    loadChildren: () => import('./vote-add/vote-add.module').then( m => m.VoteAddPageModule)
  },
  {
    path: 'vote-edit',
    loadChildren: () => import('./vote-edit/vote-edit.module').then( m => m.VoteEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
