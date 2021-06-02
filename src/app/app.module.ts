import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {
  CommentsComponent,
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {CommentsResolveService, PostsActivatorService, UserDeactivatorService} from "./services";

// 24:00
let routes: Routes = [
  {
    //render into app:
    path: 'users', component: UsersComponent,
    canDeactivate:[UserDeactivatorService],
    children: [
      // /users/:id
      //render into users:
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  //render into app:
  {path: 'posts', component: PostsComponent,
    canActivate:[PostsActivatorService]
  },
  //render into app:
  {path: 'posts/:id', component: PostDetailsComponent},
  //render into app:
  {path: 'comments', component: CommentsComponent,
    resolve: {xxx: CommentsResolveService}},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
