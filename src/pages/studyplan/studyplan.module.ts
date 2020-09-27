import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyplanPage } from './studyplan';

@NgModule({
  declarations: [
    StudyplanPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyplanPage),
  ],
})
export class StudyplanPageModule {}
