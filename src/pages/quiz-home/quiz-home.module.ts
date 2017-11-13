import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizHomePage } from './quiz-home';

@NgModule({
  declarations: [
    QuizHomePage,
  ],
  imports: [
    IonicPageModule.forChild(QuizHomePage),
  ],
})
export class QuizHomePageModule {}
