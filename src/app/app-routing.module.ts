import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './app/components/boards/boards.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HomeComponent } from './app/components/home/home.component';
import { NotesComponent } from './app/components/notes/notes.component';
import { TodosComponent } from './app/components/todos/todos.component';
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
      },
      {
        path: 'notes',
        component: NotesComponent,
        children: [
          { path: '', component: ObjNotesDashboardComponent },
          { path: 'new', component: ObjNotesCreatorComponent },
          { path: 'note/:oid', component: ObjNotesViewerComponent },
        ],
      },
      {
        path: 'tasks',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'tasks/:taid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'todos',
        component: TodosComponent,
        children: [
          { path: '', component: ObjTodosDashboardComponent },
          { path: 'new', component: ObjTodosCreatorComponent },
          { path: 'todo/:oid', component: ObjTodosViewerComponent },
        ],
      },
      {
        path: 'reminders',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'reminder/:rid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'mindmaps',
        component: BoardsComponent,
        children: [
          // { path: '', component: TodosDashboardComponent },
          // { path: 'new', component: TodosNewComponent },
          // { path: 'mindmap/:mid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'calender',
        component: BoardsComponent,
        // children: [{ path: '', component: TodosDashboardComponent }],
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
