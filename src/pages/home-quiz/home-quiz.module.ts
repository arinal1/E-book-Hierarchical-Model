import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomequizPage } from './home-quiz';

@NgModule({
  declarations: [
    HomequizPage,
  ],
  imports: [
    IonicPageModule.forChild(HomequizPage),
  ],
})
export class HomeQuizPageModule {}
