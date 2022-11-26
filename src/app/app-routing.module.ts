import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MainComponentComponent } from './components/main-component/main-component.component';


const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'Posts', component: HeroDetailComponent },
  { path: 'Comment/:id', component: CommentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
