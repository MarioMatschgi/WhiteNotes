import { PopoverModule } from './libraries/popover/popover.module';
import { LoadingModule } from './libraries/loading/loading.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { UtilModule } from './libraries/util/util.module';
import { ThemesModule } from './libraries/themes/themes.module';
import { WhitenotesModule } from './app/_whitenotes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:10000',
    }),

    WhitenotesModule,

    /* LIBRARIES */
    LoadingModule,
    PopoverModule,
    ThemesModule,
    UtilModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
