import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HasilQuizPage } from './hasil-quiz';

@NgModule({
  declarations: [
    HasilQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(HasilQuizPage),
  ],
})
export class HasilQuizPageModule {}
