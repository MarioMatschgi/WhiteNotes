import { Component, Input, OnInit } from '@angular/core';
import { Encryptable } from 'src/app/app/models/encryptable.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';

@Component({
  selector: 'objective-creator',
  templateUrl: './objective-creator.component.html',
  styleUrls: ['./objective-creator.component.scss'],
})
export class ObjectiveCreatorComponent<T extends Encryptable>
  implements OnInit
{
  objective: T;

  @Input() loaderType;

  constructor(public loadService: DataLoadService<T>) {}

  ngOnInit(): void {
    this.objective = {} as T;
  }
}
