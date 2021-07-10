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
];

@NgModule({
  declarations: components.concat([]),
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    AuthenticationModule,
    UtilModule,
  ],
  exports: components.concat([]),
})
export class WhitenotesModule {}
