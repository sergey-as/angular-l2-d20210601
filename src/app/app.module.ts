import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {CommentsComponent, PostsComponent, UserComponent, UserDetailsComponent, UsersComponent} from './components';

24:00
let routes: Routes = [
  {
    //render into app:
    path: 'users', component: UsersComponent, children: [
      // /users/:id
      //render into users:
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  //render into app:
  {path: 'posts', component: PostsComponent},
  {path: 'comments', component: CommentsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    CommentsComponent,
    UserDetailsComponent
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
