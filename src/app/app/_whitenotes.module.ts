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
import { NotesNoteComponent } from './components/notes/notes-note/notes-note.component';
import { NotesNewComponent } from './components/notes/notes-new/notes-new.component';
import { NotesDashboardComponent } from './components/notes/notes-dashboard/notes-dashboard.component';
import { NotesNoteEditorComponent } from './components/notes/notes-note-editor/notes-note-editor.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '../libraries/loading/loading.module';
import { PopoverModule } from '../libraries/popover/popover.module';

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

  /* NOTES */
  NotesComponent,
  NotesDashboardComponent,
  NotesNewComponent,
  NotesNoteComponent,
  NotesNoteEditorComponent,
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
  ],
  exports: components.concat([]),
})
export class WhitenotesModule {}
