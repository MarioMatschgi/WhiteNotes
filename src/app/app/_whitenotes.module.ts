import { QuillModule } from 'ngx-quill';
import { StGridComponent } from './components/structure/grid/grid.component';
import { StContentComponent } from './components/structure/content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StHeaderComponent } from './components/structure/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationModule } from '../libraries/authentication/authentication.module';
import { UtilModule } from '../libraries/util/util.module';
import { HomeComponent } from './components/home/home.component';
import { BoardsComponent } from './components/boards/boards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StSectionComponent } from './components/structure/section/section.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesNoteEditorComponent } from './components/notes/notes-note-editor/notes-note-editor.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../libraries/loading/loading.module';
import { PopoverModule } from '../libraries/popover/popover.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodosTodoEditorComponent } from './components/todos/todos-todo-editor/todos-todo-editor.component';
import { TodosBaseComponent } from './components/todos/todos-base/todos-base.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectiveDashboardComponent } from './components/objectives/base/objective-dashboard/objective-dashboard.component';
import { ObjNotesDashboardComponent } from './components/objectives/notes/obj-notes-dashboard/obj-notes-dashboard.component';
import { ObjectiveViewerComponent } from './components/objectives/base/objective-viewer/objective-viewer.component';
import { ObjNotesViewerComponent } from './components/objectives/notes/obj-notes-viewer/obj-notes-viewer.component';
import { ObjNotesCreatorComponent } from './components/objectives/notes/obj-notes-creator/obj-notes-creator.component';
import { ObjectiveCreatorComponent } from './components/objectives/base/objective-creator/objective-creator.component';
import { ObjTodosDashboardComponent } from './components/objectives/todos/obj-todos-dashboard/obj-todos-dashboard.component';
import { ObjTodosViewerComponent } from './components/objectives/todos/obj-todos-viewer/obj-todos-viewer.component';
import { ObjTodosCreatorComponent } from './components/objectives/todos/obj-todos-creator/obj-todos-creator.component';
import { AuthService } from '../libraries/authentication/services/auth.service';
import { DatabaseService } from '../libraries/util/services/database.service';
import { DataLoadService } from './services/data-load.service';

const components = [
  /* STRUCTURE COMPONENTS */
  StHeaderComponent,
  StContentComponent,
  StGridComponent,
  StSectionComponent,

  /* OTHER COMPONENTS */
  HomeComponent,
  DashboardComponent,
  BoardsComponent,

  /*
    OBJECTIVES
   */
  /* BASE */
  ObjectiveDashboardComponent,
  ObjectiveViewerComponent,
  ObjectiveCreatorComponent,

  /* NOTES */
  NotesComponent,
  ObjNotesDashboardComponent,
  ObjNotesViewerComponent,
  ObjNotesCreatorComponent,
  NotesNoteEditorComponent,

  /* TO-DOS */
  TodosComponent,
  ObjTodosDashboardComponent,
  ObjTodosViewerComponent,
  ObjTodosCreatorComponent,

  TodosBaseComponent,
  TodosTodoEditorComponent,
];

@NgModule({
  declarations: components.concat([]),
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    AuthenticationModule,
    UtilModule,
    QuillModule,
    FormsModule,
    LoadingModule,
    PopoverModule,
    NoopAnimationsModule,
    DragDropModule,
  ],
  exports: components.concat([]),
  providers: [
    {
      provide: DataLoadService,
      useFactory: (db, auth) => new DataLoadService(db, auth),
      deps: [DatabaseService, AuthService],
    },
  ],
})
export class WhitenotesModule {}
