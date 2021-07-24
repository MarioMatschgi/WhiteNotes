import { NoteModel } from './../../../models/note.model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { QuillEditorComponent } from 'ngx-quill';
import 'quill-emoji/dist/quill-emoji.js';
import { NotesLoaderService } from 'src/app/app/services/notes-data-loader.service';

@Component({
  selector: 'notes-note-editor',
  templateUrl: './notes-note-editor.component.html',
  styleUrls: ['./notes-note-editor.component.scss'],
})
export class NotesNoteEditorComponent implements OnInit {
  URLs = RouterUrls;

  @Input() mode: 'add' | 'edit';

  private _note: NoteModel = {} as NoteModel;
  get note(): NoteModel {
    return this._note;
  }
  @Input() set note(val) {
    this._note = val;
    this.noteChange.emit(val);
  }
  @Output() noteChange: EventEmitter<NoteModel> = new EventEmitter<NoteModel>();

  @ViewChild('quill') quill: QuillEditorComponent;
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    ['clean'], // remove formatting button

    ['emoji'],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
  ];

  constructor(
    public gv: GlobalVariablesService,
    private router: RouterService,
    public loader: LoadService,
    private notes_loader: NotesLoaderService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.nav_backward();
  }
  async add() {
    this.loader.load();

    await this.notes_loader.addData(this.note);

    this.loader.unload();

    this.router.nav(this.URLs.notes_note, [this.note.id]);
  }
  async save() {
    this.loader.load();

    await this.notes_loader.updateData(this.note);

    this.loader.unload();
  }
}
