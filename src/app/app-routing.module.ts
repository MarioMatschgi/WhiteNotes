import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './app/components/boards/boards.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HomeComponent } from './app/components/home/home.component';
import { NotesDashboardComponent } from './app/components/notes/notes-dashboard/notes-dashboard.component';
import { NotesNewComponent } from './app/components/notes/notes-new/notes-new.component';
import { NotesNoteComponent } from './app/components/notes/notes-note/notes-note.component';
import { NotesComponent } from './app/components/notes/notes.component';
import { TodosDashboardComponent } from './app/components/todos/todos-dashboard/todos-dashboard.component';
import { TodosNewComponent } from './app/components/todos/todos-new/todos-new.component';
import { TodosTodoComponent } from './app/components/todos/todos-todo/todos-todo.component';
import { TodosComponent } from './app/components/todos/todos.component';
import { AuthLoginComponent } from './libraries/authentication/components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './libraries/authentication/components/auth-register/auth-register.component';
import { AuthResetComponent } from './libraries/authentication/components/auth-reset/auth-reset.component';
import { AuthVerifyEmailComponent } from './libraries/authentication/components/auth-verify-email/auth-verify-email.component';
import { AuthComponent } from './libraries/authentication/components/auth.component';
import { AuthLoginGuard } from './libraries/authentication/guards/auth-login.guard';

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
          { path: '', component: TodosDashboardComponent },
          { path: 'new', component: TodosNewComponent },
          { path: 'board/:bid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'notes',
        component: NotesComponent,
        children: [
          { path: '', component: NotesDashboardComponent },
          { path: 'new', component: NotesNewComponent },
          { path: 'note/:nid', component: NotesNoteComponent },
        ],
      },
      {
        path: 'tasks',
        component: BoardsComponent,
        children: [
          { path: '', component: TodosDashboardComponent },
          { path: 'new', component: TodosNewComponent },
          { path: 'tasks/:taid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'todos',
        component: TodosComponent,
        children: [
          { path: '', component: TodosDashboardComponent },
          { path: 'new', component: TodosNewComponent },
          { path: 'todo/:toid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'reminders',
        component: BoardsComponent,
        children: [
          { path: '', component: TodosDashboardComponent },
          { path: 'new', component: TodosNewComponent },
          { path: 'reminder/:rid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'mindmaps',
        component: BoardsComponent,
        children: [
          { path: '', component: TodosDashboardComponent },
          { path: 'new', component: TodosNewComponent },
          { path: 'mindmap/:mid', component: TodosTodoComponent },
        ],
      },
      {
        path: 'calender',
        component: BoardsComponent,
        children: [{ path: '', component: TodosDashboardComponent }],
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
