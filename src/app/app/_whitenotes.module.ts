import { QuillModule } from 'ngx-quill';
import { StGridComponent } from './components/structure/st-grid/st-grid.component';
import { StContentComponent } from './components/structure/st-content/st-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StHeaderComponent } from './components/structure/st-header/st-header.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationModule } from '../libraries/authentication/authentication.module';
import { UtilModule } from '../libraries/util/util.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StSectionComponent } from './components/structure/st-section/st-section.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../libraries/loading/loading.module';
import { PopoverModule } from '../libraries/popover/popover.module';
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
import { ObjectiveRootComponent } from './components/objectives/base/objective-root/objective-root.component';
import { ObjTodosRootComponent } from './components/objectives/todos/obj-todos-root/obj-todos-root.component';
import { ObjNotesRootComponent } from './components/objectives/notes/obj-notes-root/obj-notes-root.component';
import { ObjectiveEditorComponent } from './components/objectives/base/objective-editor/objective-editor.component';
import { ObjBoardsCreatorComponent } from './components/objectives/boards/obj-boards-creator/obj-boards-creator.component';
import { ObjBoardsDashboardComponent } from './components/objectives/boards/obj-boards-dashboard/obj-boards-dashboard.component';
import { ObjBoardsRootComponent } from './components/objectives/boards/obj-boards-root/obj-boards-root.component';
import { ObjBoardsViewerComponent } from './components/objectives/boards/obj-boards-viewer/obj-boards-viewer.component';

const components = [
  /* STRUCTURE COMPONENTS */
  StHeaderComponent,
  StContentComponent,
  StGridComponent,
  StSectionComponent,

  /* OTHER COMPONENTS */
  HomeComponent,
  DashboardComponent,

  /*
    OBJECTIVES
   */
  /* BASE */
  ObjectiveRootComponent,
  ObjectiveDashboardComponent,
  ObjectiveViewerComponent,
  ObjectiveCreatorComponent,
  ObjectiveEditorComponent,

  /* BOARDS */
  ObjBoardsRootComponent,
  ObjBoardsDashboardComponent,
  ObjBoardsViewerComponent,
  ObjBoardsCreatorComponent,

  /* NOTES */
  ObjNotesRootComponent,
  ObjNotesDashboardComponent,
  ObjNotesViewerComponent,
  ObjNotesCreatorComponent,

  /* TO-DOS */
  ObjTodosRootComponent,
  ObjTodosDashboardComponent,
  ObjTodosViewerComponent,
  ObjTodosCreatorComponent,
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
})
export class WhitenotesModule {}
