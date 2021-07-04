import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotedownComponent } from './components/notedown/notedown.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthenticationModule } from '../libraries/authentication/authentication.module';
import { IonicModule } from '@ionic/angular';
import { UtilModule } from '../libraries/util/util.module';

const components = [HeaderComponent, NotedownComponent];

@NgModule({
  declarations: components.concat([]),
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    AuthenticationModule,
    IonicModule,
    UtilModule,
  ],
  exports: components.concat([]),
})
export class WhitenotesModule {}
