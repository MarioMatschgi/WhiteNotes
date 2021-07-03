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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    IonicModule.forRoot(),
    WhitenotesModule,

    /* LIBRARIES */
    LoadingModule,
    PopoverModule,
    ThemesModule,
    UtilModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
