import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './app/components/boards/boards.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HomeComponent } from './app/components/home/home.component';
import { AuthLoginComponent } from './libraries/authentication/components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './libraries/authentication/components/auth-register/auth-register.component';
import { AuthResetComponent } from './libraries/authentication/components/auth-reset/auth-reset.component';
import { AuthVerifyEmailComponent } from './libraries/authentication/components/auth-verify-email/auth-verify-email.component';
import { AuthComponent } from './libraries/authentication/components/auth.component';
import { AuthLoginGuard } from './libraries/authentication/guards/auth-login.guard';
import { ObjNotesDashboardComponent } from './app/components/objectives/notes/obj-notes-dashboard/obj-notes-dashboard.component';
import { ObjNotesViewerComponent } from './app/components/objectives/notes/obj-notes-viewer/obj-notes-viewer.component';
import { ObjNotesCreatorComponent } from './app/components/objectives/notes/obj-notes-creator/obj-notes-creator.component';
import { ObjTodosCreatorComponent } from './app/components/objectives/todos/obj-todos-creator/obj-todos-creator.component';
import { ObjTodosDashboardComponent } from './app/components/objectives/todos/obj-todos-dashboard/obj-todos-dashboard.component';
import { ObjTodosViewerComponent } from './app/components/objectives/todos/obj-todos-viewer/obj-todos-viewer.component';
import { ObjTodosRootComponent } from './app/components/objectives/todos/obj-todos-root/obj-todos-root.component';
import { ObjNotesRootComponent } from './app/components/objectives/notes/obj-notes-root/obj-notes-root.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'boards',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'board/:bid', component: TodosTodoComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'notes',
        component: ObjNotesRootComponent,
        children: [
          { path: '', component: ObjNotesDashboardComponent },
          { path: 'new', component: ObjNotesCreatorComponent },
          { path: 'note/:oid', component: ObjNotesViewerComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'tasks',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'tasks/:taid', component: TodosTodoComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'todos',
        component: ObjTodosRootComponent,
        children: [
          { path: '', component: ObjTodosDashboardComponent },
          { path: 'new', component: ObjTodosCreatorComponent },
          { path: 'todo/:oid', component: ObjTodosViewerComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'reminders',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'reminder/:rid', component: TodosTodoComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'mindmaps',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'mindmap/:mid', component: TodosTodoComponent },
        ],
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'calender',
        component: BoardsComponent,
        // children: [{ path: '', component: TodosDashboardComponent }],
        canActivate: [AuthLoginGuard],
      },

      /* AUTH: authentication stuff */
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: 'login', component: AuthLoginComponent },
          { path: 'register', component: AuthRegisterComponent },
          { path: 'verify-email', component: AuthVerifyEmailComponent },
          { path: 'reset-password', component: AuthResetComponent },
        ],
        canActivate: [AuthLoginGuard],
        data: { inverted: true },
      },
    ],
  },

  /* NOT FOUND */
  // { path: '**', component: NotFoundGeneralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
